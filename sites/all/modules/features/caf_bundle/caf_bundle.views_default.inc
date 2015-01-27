<?php
/**
 * @file
 * caf_bundle.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function caf_bundle_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'did_you_know_';
  $view->description = 'Display the Did You Know information for a page (must provide term ID)';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Did You Know?';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Did You Know?';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Associate with which part of the site? (field_associate_with_which_part_) */
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['id'] = 'field_associate_with_which_part__target_id';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['table'] = 'field_data_field_associate_with_which_part_';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['field'] = 'field_associate_with_which_part__target_id';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'did_you_know_' => 'did_you_know_',
  );

  /* Display: Did You Know */
  $handler = $view->new_display('block', 'Did You Know', 'block');
  $export['did_you_know_'] = $view;

  $view = new view();
  $view->name = 'homepage_popular_resources';
  $view->description = 'Display popular resources on any page (must send page discriminator)';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Popular Resources';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Popular Resources';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Popular Resource Link */
  $handler->display->display_options['fields']['field_popular_resource_link']['id'] = 'field_popular_resource_link';
  $handler->display->display_options['fields']['field_popular_resource_link']['table'] = 'field_data_field_popular_resource_link';
  $handler->display->display_options['fields']['field_popular_resource_link']['field'] = 'field_popular_resource_link';
  $handler->display->display_options['fields']['field_popular_resource_link']['label'] = '';
  $handler->display->display_options['fields']['field_popular_resource_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_popular_resource_link']['click_sort_column'] = 'url';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Associate with which part of the site? (field_associate_with_which_part_) */
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['id'] = 'field_associate_with_which_part__target_id';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['table'] = 'field_data_field_associate_with_which_part_';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['field'] = 'field_associate_with_which_part__target_id';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'popular_resources' => 'popular_resources',
  );

  /* Display: Popular Resources */
  $handler = $view->new_display('block', 'Popular Resources', 'block');
  $export['homepage_popular_resources'] = $view;

  $view = new view();
  $view->name = 'site_content';
  $view->description = 'Display site content for a particular page (must send page id = term id)';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Site Content';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Site Content';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Associate with which part of the site? (field_associate_with_which_part_) */
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['id'] = 'field_associate_with_which_part__target_id';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['table'] = 'field_data_field_associate_with_which_part_';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['field'] = 'field_associate_with_which_part__target_id';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_associate_with_which_part__target_id']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'site_content' => 'site_content',
  );

  /* Display: Site content */
  $handler = $view->new_display('block', 'Site content', 'block');
  $export['site_content'] = $view;

  return $export;
}
