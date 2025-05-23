let currEditorCode = "";
let lastConsumedCode = ""

window.onerror = function (message, source, lineno, colno, error) {
  console.error('Global JS Error Caught:', {
    message,
    source,
    lineno,
    colno,
    error
  });
  return true;
};

function loadWasm() {
  if (!WebAssembly.instantiateStreaming) { // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
      const source = await (await resp).arrayBuffer();
      return await WebAssembly.instantiate(source, importObject);
    };
  }

  const go = new Go();
  let mod, inst;
  WebAssembly.instantiateStreaming(fetch("./main.wasm"), go.importObject).then((result) => {
    mod = result.module;
    inst = result.instance;

    console.log("Loaded Wasm!")
    go.run(inst);
    inst = WebAssembly.instantiate(mod, go.importObject); // reset instance

    setInterval(safeRender, 100)
  }).catch((err) => {
    console.error(err);
  });
}

function safeRender() {
  try {
    generateXmlCode()
  } catch (e) {
    lastConsumedCode = currEditorCode;
  }
}


function generateXmlCode() {
  if (!currEditorCode || lastConsumedCode === currEditorCode) {
    return;
  }
  const execCode = currEditorCode.trim();
  console.log(execCode);
  if (execCode.isEmpty) {
    return;
  }
  lastConsumedCode = currEditorCode
  const xmlGenerated = mistToXml(execCode)
  if (!xmlGenerated) {
    return;
  }
  renderXmls(xmlGenerated);
  console.log("Render completed")
}
window.generateXmlCode = generateXmlCode

function renderXmls(xmlGenerated) {
  const xmlStrings = xmlGenerated.split("\u0000");
  const workspace = Blockly.getMainWorkspace();
  workspace.clear()

  const blocks = [];

  for (let i = 0; i < xmlStrings.length; i++) {
    const xmlString = xmlStrings[i].trim();
    if (!xmlString || xmlString.replace(/\0/g, '').trim() === '') {
      continue;
    }

    console.log(xmlString);
    const xml = Blockly.utils.xml.textToDom(xmlString);
    const xmlBlock = xml.firstElementChild;
    const block = Blockly.Xml.domToBlock(xmlBlock, workspace);
    block.initSvg(); // Init all blocks first
    blocks.push(block); // Save for rendering later
  }

  for (const block of blocks) {
    workspace.requestRender(block);
  }

  sortBlocks()
}

function sortBlocks() {
  const item = Blockly.ContextMenuRegistry.registry.getItem("appinventor_arrange_vertical");

  if (item && typeof item.callback === "function") {
    const workspace = Blockly.getMainWorkspace(); // Or any other workspace you're using

    const fakeScope = {workspace: workspace,};
    item.callback(fakeScope, null);
  } else {
    console.error("Callback not found or item is invalid");
  }

}

loadWasm()

window.addEventListener("message", (e) => {
  currEditorCode = e.data
})
