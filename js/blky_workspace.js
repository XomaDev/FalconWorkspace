function BlocklyPanel_checkIsAdmin() {
  return false;
}
function BlocklyPanel_getSnapEnabled() {
  return true;
}
window.BlocklyPanel_checkIsAdmin = BlocklyPanel_checkIsAdmin
window.BlocklyPanel_getSnapEnabled = BlocklyPanel_getSnapEnabled

const options = {
  'toolbox': document.getElementById('toolbox'),
  'readOnly': false,
  'disable': true,
  'grid': {'spacing': '20', 'length': '5', 'snap': false, 'colour': '#ccc'},
  useDoubleClick: true,
  bumpNeighbours: true,
  renderer: 'geras2_renderer',
};

const workspace = Blockly.inject('blocklyDiv', options);
workspace.formName = "CatScreen";
workspace.screenList_ = [];
workspace.assetList_ = [];
workspace.componentDb_ = new Blockly.ComponentDatabase();
workspace.procedureDb_ = new Blockly.ProcedureDatabase(workspace);
workspace.variableDb_ = new Blockly.VariableDatabase();
workspace.blocksNeedingRendering = [];
workspace.addWarningHandler();
