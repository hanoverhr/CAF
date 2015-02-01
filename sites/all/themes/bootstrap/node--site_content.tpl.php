<?php
// Dorian Winterfeld
// 31JAN2014
?>

<?php //print($content['field_content_designator'][0]['#markup']); 
$designator = $content['field_content_designator'][0]['#markup'];
?>

<?php switch ($designator) { 
		case 'Announcement':
?>

<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<div class="content"<?php print $content_attributes; ?>>
<div class="modal-body announcements">
<h1><?php print $title ?>
<?php if (isset($content['field_image'])) {?>
<?php print render($content['field_image']) ?>
<?php }; ?>
</h1>
<p></p>
<p><?php print $content['body'][0]['#markup'] ?></p>
<br>
<br>
</p>
</div>
</div>
</div>
<?php      break; ?>  

<?php 		case 'About Us': ?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<div class="content"<?php print $content_attributes; ?>>
<div class="modal-body aboutus">
<h3><?php print $title ?></h3>
<?php if (isset($content['field_image'])) {?>
<?php print render($content['field_image']) ?>
<?php }; ?>
<p><?php print $content['body'][0]['#markup'] ?></p>
</div>
</div>
</div>
<?php      break; ?>   
 
<?php 		case 'Careers': ?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<div class="content"<?php print $content_attributes; ?>>
<div class="modal-body careers">
<h2><?php print $title ?></h2>
<?php if (isset($content['field_image'])) {?>
<?php print render($content['field_image']) ?>
<?php }; ?>
<p><?php print $content['body'][0]['#markup'] ?></p>
</div>
</div>
</div>
<?php      break; ?>    

<?php 		case 'FAQ': ?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<div class="content"<?php print $content_attributes; ?>>
<div class="modal-body faq">
<h2><?php print $title ?></h2>
<?php if (isset($content['field_image'])) {?>
<?php print render($content['field_image']) ?>
<?php }; ?>
<p><?php print $content['body'][0]['#markup'] ?></p>
</div>
</div>
</div>
</div>
<?php      break; ?>  

<?php 		case 'Site Information': ?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<div class="content"<?php print $content_attributes; ?>>
<div class="modal-body">
<h2><?php print $title ?></h2>
<?php if (isset($content['field_image'])) {?>
<?php print render($content['field_image']) ?>
<?php }; ?>
<p><?php print $content['body'][0]['#markup'] ?></p>
</div>
</div>
</div>
<?php      break; ?>  
<?php }; ?>
