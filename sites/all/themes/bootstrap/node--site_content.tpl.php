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
<!-- Announcements -->
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<div class="content"<?php print $content_attributes; ?>>
<div class="modal-body announcements">
<h1><?php print $title ?>
</h1>
<?php if (isset($content['field_image'])) {?>
<?php print render($content['field_image']) ?>
<?php }; ?>
<br clear="left">
<p><?php print $content['body'][0]['#markup'] ?></p>
<br>
<br>
</p>
</div>
</div>
</div>
<!-- /Announcements -->
<?php      break; ?>  

<?php 		case 'About Us': ?>
<!-- About Us -->
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
<!-- /About Us -->
<?php      break; ?>   
 
<?php 		case 'Careers': ?>
<!-- Careers -->
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
<!-- /Careers -->
<?php      break; ?>    

<?php 		case 'FAQ': ?>
<!-- FAQ -->
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
<!-- /FAQ -->
<?php      break; ?>  

<?php 		case 'Site Information': ?>
<!-- Site Informantion -->
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
<!-- /Site Informantion --> 
<?php      break; ?> 
<?php }; ?>
