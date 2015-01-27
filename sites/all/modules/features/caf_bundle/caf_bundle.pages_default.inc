<?php
/**
 * @file
 * caf_bundle.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_pages().
 */
function caf_bundle_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'home_page';
  $page->task = 'page';
  $page->admin_title = 'Home Page';
  $page->admin_description = 'This is the home page.';
  $page->path = 'home';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_home_page_panel_context';
  $handler->task = 'page';
  $handler->subtask = 'home_page';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Homepage (all)',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => 'homepage',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
  );
  $display = new panels_display();
  $display->layout = 'flexible';
  $display->layout_settings = array(
    'items' => array(
      'canvas' => array(
        'type' => 'row',
        'contains' => 'column',
        'children' => array(
          0 => 'main',
        ),
        'parent' => NULL,
      ),
      'main' => array(
        'type' => 'column',
        'width' => 100,
        'width_type' => '%',
        'children' => array(
          0 => 'main-row',
        ),
        'parent' => 'canvas',
      ),
      'main-row' => array(
        'type' => 'row',
        'contains' => 'region',
        'children' => array(
          0 => 'popular_resources',
          1 => 'center',
          2 => 'did_you_know_',
        ),
        'parent' => 'main',
      ),
      'center' => array(
        'type' => 'region',
        'title' => 'Center',
        'width' => '33.27196698192111',
        'width_type' => '%',
        'parent' => 'main-row',
      ),
      'popular_resources' => array(
        'type' => 'region',
        'title' => 'Popular Resources',
        'width' => '33.729285405263056',
        'width_type' => '%',
        'parent' => 'main-row',
        'class' => 'popular_resources',
      ),
      'did_you_know_' => array(
        'type' => 'region',
        'title' => 'Did You Know?',
        'width' => '32.99874761281584',
        'width_type' => '%',
        'parent' => 'main-row',
        'class' => 'did_you_know',
      ),
    ),
  );
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'center' => NULL,
      'popular_resources' => NULL,
      'did_you_know_' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '2eaa0d6c-3881-477d-8c76-71b0e114d2ae';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-b1bb3794-0b17-40ea-9401-4cc5e4f8aaa8';
    $pane->panel = 'center';
    $pane->type = 'views';
    $pane->subtype = 'site_content';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 1,
      'nodes_per_page' => '5',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '1',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => '',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'b1bb3794-0b17-40ea-9401-4cc5e4f8aaa8';
    $display->content['new-b1bb3794-0b17-40ea-9401-4cc5e4f8aaa8'] = $pane;
    $display->panels['center'][0] = 'new-b1bb3794-0b17-40ea-9401-4cc5e4f8aaa8';
    $pane = new stdClass();
    $pane->pid = 'new-6a25260d-e39e-4e45-a1d2-8c863fd3d489';
    $pane->panel = 'did_you_know_';
    $pane->type = 'views';
    $pane->subtype = 'did_you_know_';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '5',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '1',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => 'DID YOU KNOW?',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '6a25260d-e39e-4e45-a1d2-8c863fd3d489';
    $display->content['new-6a25260d-e39e-4e45-a1d2-8c863fd3d489'] = $pane;
    $display->panels['did_you_know_'][0] = 'new-6a25260d-e39e-4e45-a1d2-8c863fd3d489';
    $pane = new stdClass();
    $pane->pid = 'new-cdf88eb5-1091-44be-9232-3cabde447525';
    $pane->panel = 'popular_resources';
    $pane->type = 'views';
    $pane->subtype = 'homepage_popular_resources';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 1,
      'nodes_per_page' => '5',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '1',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => 'POPULAR RESOURCES',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'cdf88eb5-1091-44be-9232-3cabde447525';
    $display->content['new-cdf88eb5-1091-44be-9232-3cabde447525'] = $pane;
    $display->panels['popular_resources'][0] = 'new-cdf88eb5-1091-44be-9232-3cabde447525';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['home_page'] = $page;

  return $pages;

}
