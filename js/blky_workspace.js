function BlocklyPanel_checkIsAdmin() {
  return false;
}
function BlocklyPanel_getSnapEnabled() {
  return true;
}
window.BlocklyPanel_checkIsAdmin = BlocklyPanel_checkIsAdmin;
window.BlocklyPanel_getSnapEnabled = BlocklyPanel_getSnapEnabled;

const catToolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Control',
      colour: '210',
      contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'controls_forRange' },
        { kind: 'block', type: 'controls_forEach' },
        { kind: 'block', type: 'controls_for_each_dict' },
        { kind: 'block', type: 'controls_while' },
        { kind: 'block', type: 'controls_choose' },
        { kind: 'block', type: 'controls_do_then_return' },
        { kind: 'block', type: 'controls_eval_but_ignore' },
        { kind: 'block', type: 'controls_openAnotherScreen' },
        { kind: 'block', type: 'controls_openAnotherScreenWithStartValue' },
        { kind: 'block', type: 'controls_getStartValue' },
        { kind: 'block', type: 'controls_closeScreen' },
        { kind: 'block', type: 'controls_closeScreenWithValue' },
        { kind: 'block', type: 'controls_closeApplication' },
        { kind: 'block', type: 'controls_getPlainStartText' },
        { kind: 'block', type: 'controls_closeScreenWithPlainText' },
        { kind: 'block', type: 'controls_break' }
      ]
    },
    {
      kind: 'category',
      name: 'Logic',
      colour: '#5C81A6', // Blockly.LOGIC_CATEGORY_HUE
      contents: [
        {kind: 'block', type: 'logic_boolean'},
        {kind: 'block', type: 'logic_false'},
        {kind: 'block', type: 'logic_negate'},
        {kind: 'block', type: 'logic_compare'},
        {kind: 'block', type: 'logic_operation'},
        {kind: 'block', type: 'logic_or'}
      ]
    },
    {
      kind: 'category',
      name: 'Math',
      colour: '230',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_number_radix' },
        { kind: 'block', type: 'math_compare' },
        { kind: 'block', type: 'math_add' },
        { kind: 'block', type: 'math_subtract' },
        { kind: 'block', type: 'math_multiply' },
        { kind: 'block', type: 'math_division' },
        { kind: 'block', type: 'math_power' },
        { kind: 'block', type: 'math_bitwise' },
        { kind: 'block', type: 'math_random_int' },
        { kind: 'block', type: 'math_random_float' },
        { kind: 'block', type: 'math_random_set_seed' },
        { kind: 'block', type: 'math_on_list' },
        { kind: 'block', type: 'math_on_list2' },
        { kind: 'block', type: 'math_mode_of_list' },
        { kind: 'block', type: 'math_single' },
        { kind: 'block', type: 'math_abs' },
        { kind: 'block', type: 'math_neg' },
        { kind: 'block', type: 'math_round' },
        { kind: 'block', type: 'math_ceiling' },
        { kind: 'block', type: 'math_floor' },
        { kind: 'block', type: 'math_divide' },
        { kind: 'block', type: 'math_trig' },
        { kind: 'block', type: 'math_cos' },
        { kind: 'block', type: 'math_tan' },
        { kind: 'block', type: 'math_atan2' },
        { kind: 'block', type: 'math_convert_angles' },
        { kind: 'block', type: 'math_format_as_decimal' },
        { kind: 'block', type: 'math_is_a_number' },
        { kind: 'block', type: 'math_convert_number' }
      ]
    },
    {
      kind: 'category',
      name: 'Text',
      colour: '160',
      contents: [
        { kind: 'block', type: 'text' },
        { kind: 'block', type: 'text_join' },
        { kind: 'block', type: 'text_length' },
        { kind: 'block', type: 'text_isEmpty' },
        { kind: 'block', type: 'text_compare' },
        { kind: 'block', type: 'text_trim' },
        { kind: 'block', type: 'text_changeCase' },
        { kind: 'block', type: 'text_starts_at' },
        { kind: 'block', type: 'text_contains' },
        { kind: 'block', type: 'text_split' },
        { kind: 'block', type: 'text_split_at_spaces' },
        { kind: 'block', type: 'text_segment' },
        { kind: 'block', type: 'text_replace_all' },
        { kind: 'block', type: 'obfuscated_text' },
        { kind: 'block', type: 'text_is_string' },
        { kind: 'block', type: 'text_reverse' },
        { kind: 'block', type: 'text_replace_mappings' }
      ]
    },
    {
      kind: 'category',
      name: 'Lists',
      colour: '120',
      contents: [
        { kind: 'block', type: 'lists_create_with' },
        { kind: 'block', type: 'lists_add_items' },
        { kind: 'block', type: 'lists_is_in' },
        { kind: 'block', type: 'lists_length' },
        { kind: 'block', type: 'lists_is_empty' },
        { kind: 'block', type: 'lists_pick_random_item' },
        { kind: 'block', type: 'lists_position_in' },
        { kind: 'block', type: 'lists_select_item' },
        { kind: 'block', type: 'lists_insert_item' },
        { kind: 'block', type: 'lists_replace_item' },
        { kind: 'block', type: 'lists_remove_item' },
        { kind: 'block', type: 'lists_append_list' },
        { kind: 'block', type: 'lists_copy' },
        { kind: 'block', type: 'lists_is_list' },
        { kind: 'block', type: 'lists_reverse' },
        { kind: 'block', type: 'lists_to_csv_row' },
        { kind: 'block', type: 'lists_to_csv_table' },
        { kind: 'block', type: 'lists_from_csv_row' },
        { kind: 'block', type: 'lists_from_csv_table' },
        { kind: 'block', type: 'lists_lookup_in_pairs' },
        { kind: 'block', type: 'lists_join_with_separator' },
        { kind: 'block', type: 'lists_map' },
        { kind: 'block', type: 'lists_filter' },
        { kind: 'block', type: 'lists_reduce' },
        { kind: 'block', type: 'lists_sort' },
        { kind: 'block', type: 'lists_sort_comparator' },
        { kind: 'block', type: 'lists_sort_key' },
        { kind: 'block', type: 'lists_minimum_value' },
        { kind: 'block', type: 'lists_maximum_value' },
        { kind: 'block', type: 'lists_but_first' },
        { kind: 'block', type: 'lists_but_last' },
        { kind: 'block', type: 'lists_slice' }
      ]
    },
    {
      kind: 'category',
      name: 'Dictionaries',
      colour: '0',
      contents: [
        { kind: 'block', type: 'dictionaries_create_with' },
        { kind: 'block', type: 'pair' },
        { kind: 'block', type: 'dictionaries_lookup' },
        { kind: 'block', type: 'dictionaries_set_pair' },
        { kind: 'block', type: 'dictionaries_delete_pair' },
        { kind: 'block', type: 'dictionaries_recursive_lookup' },
        { kind: 'block', type: 'dictionaries_recursive_set' },
        { kind: 'block', type: 'dictionaries_getters' },
        { kind: 'block', type: 'dictionaries_get_values' },
        { kind: 'block', type: 'dictionaries_is_key_in' },
        { kind: 'block', type: 'dictionaries_length' },
        { kind: 'block', type: 'dictionaries_alist_to_dict' },
        { kind: 'block', type: 'dictionaries_dict_to_alist' },
        { kind: 'block', type: 'dictionaries_copy' },
        { kind: 'block', type: 'dictionaries_combine_dicts' },
        { kind: 'block', type: 'dictionaries_walk_tree' },
        { kind: 'block', type: 'dictionaries_walk_all' },
        { kind: 'block', type: 'dictionaries_is_dict' }
      ]
    },
    {
      kind: 'category',
      name: 'Colors',
      colour: '#A65C81', // a purple-pink tone similar to Blockly’s default color category hue
      contents: [
        {kind: 'block', type: 'color_black'},
        {kind: 'block', type: 'color_white'},
        {kind: 'block', type: 'color_red'},
        {kind: 'block', type: 'color_pink'},
        {kind: 'block', type: 'color_orange'},
        {kind: 'block', type: 'color_yellow'},
        {kind: 'block', type: 'color_green'},
        {kind: 'block', type: 'color_cyan'},
        {kind: 'block', type: 'color_blue'},
        {kind: 'block', type: 'color_magenta'},
        {kind: 'block', type: 'color_light_gray'},
        {kind: 'block', type: 'color_gray'},
        {kind: 'block', type: 'color_dark_gray'},
        {kind: 'block', type: 'color_make_color'},
        {kind: 'block', type: 'color_split_color'}
      ]
    },
    {
      kind: 'category',
      name: 'Variables',
      colour: '#A65C81', // Blockly.VARIABLE_CATEGORY_HUE
      contents: [
        { kind: 'block', type: 'global_declaration' },
        { kind: 'block', type: 'lexical_variable_get' },
        { kind: 'block', type: 'lexical_variable_set' },
        { kind: 'block', type: 'local_declaration_statement' },
        { kind: 'block', type: 'local_declaration_expression' },
        { kind: 'block', type: 'local_mutatorcontainer' },
        { kind: 'block', type: 'local_mutatorarg' }
      ]
    },
    {
      kind: 'category',
      name: 'Procedures',
      colour: '290',
      contents: [
        { kind: 'block', type: 'procedures_defnoreturn' },
        { kind: 'block', type: 'procedures_defreturn' },
        { kind: 'block', type: 'procedures_callnoreturn' },
        { kind: 'block', type: 'procedures_callreturn' }
      ]
    }
  ]
};

const options = {
  'toolbox': catToolbox,
  'grid': {'spacing': '20', 'length': '5', 'snap': false, 'colour': '#ccc'},
  // useDoubleClick: true,
  // bumpNeighbours: true,
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

let openCategoryId = null;
const toolbox = workspace.getToolbox();

// ----------- OPEN A CATEGORY -----------
function openCategory(catId) {
  const item = toolbox.getToolboxItemById(catId);
  if (!item) {
    console.warn('No toolbox item with id:', catId);
    return;
  }

  const items = toolbox.getToolboxItems();
  const index = items.indexOf(item);
  if (index === -1) {
    console.warn('Toolbox item not found in toolbox.getToolboxItems():', catId);
    return;
  }

  // This is the correct public API to cause Blockly to select the category
  toolbox.selectItemByPosition(index);
  openCategoryId = catId;
}

// ----------- CLOSE THE TOOLBOX -----------
function closeToolbox() {
  const flyout = toolbox.getFlyout();
  if (flyout && typeof flyout.hide === 'function') {
    flyout.hide();
  } else {
    // As a fallback, attempt to deselect selected item (best-effort).
    if (typeof toolbox.setSelectedItem === 'function') {
      toolbox.setSelectedItem(null);
    }
  }
  openCategoryId = null;
}

const categoryRows = document.querySelectorAll('.blocklyToolboxCategory .blocklyTreeRow');
// ----------- SET UP CATEGORY CLICK EVENTS -----------
categoryRows.forEach(row => {
  console.log(row);
  row.addEventListener('click', event => {
    event.stopPropagation();

    const id = row.id;   // Example: "blockly-0"

    // Toggle behavior
    if (openCategoryId === id) {
      closeToolbox();
    } else {
      openCategory(id);
    }
  });
});

// ----------- CLOSE WHEN CLICKING ANYWHERE ELSE -----------
document.addEventListener('click', () => {
  closeToolbox();
});
