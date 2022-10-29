<!DOCTYPE html>
<html lang="pt_br">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="HandheldFriendly" content="True" />
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="language" content="pt-br">
    <title>Government and public policy</title>
    <?php wp_head(); ?>
    <meta property="og:type" content="website">
    <meta property="og:title" content="Framework TaPronto">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" type="image/png" href="<?php tu(); ?>/assets/images/favicon.png">
    <link href="<?php tu(); ?>/assets/images/favicon.png" rel="shortcut icon">
    <link rel="stylesheet" href="<?php tu(); ?>/build/style.css"> 
    
    <!-- FONT ADOBE -->
    <link rel="stylesheet" href="https://use.typekit.net/yem0zrg.css">
    <!-- FONT GOOGLE -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

</head>

<body>
    <?php get_template_part('blocks/_svg'); ?>

    <div id="mainContent" data-page="<?php echo isset($current_page)?$current_page:''; ?>" > 
        <header class="top-bar" id="topBar">
            <nav class="container-fluid wrap">
              
                <?php get_template_part('blocks/_menu-nav'); ?>
            
            </nav>
        </header>