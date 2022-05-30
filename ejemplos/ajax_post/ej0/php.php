<?php
  $xml = new DOMDocument("1.0","UTF-8");
  $xml->load("bbdd.xml");

  $rootTag = $xml->getElementsByTagName("document")->item(0);

  ### Utilizando ELEMENTS
  $dataTag = $xml->createElement("Objeto");

  $nameTag = $xml->createElement("nombre",$_REQUEST['nombre']);
  $descTag = $xml->createElement("descripcion",$_REQUEST['descripcion']);
  $prizeTag = $xml->createElement("precio",$_REQUEST['precio']);

  $dataTag->appendChild($nameTag);
  $dataTag->appendChild($descTag);
  $dataTag->appendChild($prizeTag);

  $rootTag->appendChild($dataTag);

  $xml->save("bbdd.xml");
?>
