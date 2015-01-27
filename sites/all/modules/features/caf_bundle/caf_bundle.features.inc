<?php
/**
 * @file
 * caf_bundle.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function caf_bundle_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function caf_bundle_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function caf_bundle_node_info() {
  $items = array(
    'did_you_know_' => array(
      'name' => t('Did You Know?'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'page' => array(
      'name' => t('Basic page'),
      'base' => 'node_content',
      'description' => t('Use <em>basic pages</em> for your static content, such as an \'About us\' page.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'popular_resources' => array(
      'name' => t('Popular Resources'),
      'base' => 'node_content',
      'description' => t('Maintains the list of popular resources for the site.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'site_content' => array(
      'name' => t('Site Content'),
      'base' => 'node_content',
      'description' => t('Basic site content used throughout CAF.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
