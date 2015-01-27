<?php
/**
 * @file
 * caf_bundle.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function caf_bundle_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-footer-menu.
  $menus['menu-footer-menu'] = array(
    'menu_name' => 'menu-footer-menu',
    'title' => 'Footer menu',
    'description' => '',
  );
  // Exported menu: menu-top-menu.
  $menus['menu-top-menu'] = array(
    'menu_name' => 'menu-top-menu',
    'title' => 'Top Menu',
    'description' => 'This is the menu that appears in the header section of the site.',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Footer menu');
  t('This is the menu that appears in the header section of the site.');
  t('Top Menu');


  return $menus;
}
