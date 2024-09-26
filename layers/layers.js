var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'GoogleMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "ตำบล",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> ตำบล'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "พิกัดที่เที่ยวโซนตะวันออก",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> พิกัดที่เที่ยวโซนตะวันออก'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "พิกัดที่ท่องเที่ยวโซนใต้",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> พิกัดที่ท่องเที่ยวโซนใต้'
            });

lyr_GoogleMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'ชื่อสถานที่': 'ชื่อสถานที่', 'x': 'x', 'y': 'y', 'รูปภาพ': 'รูปภาพ', });
lyr__2.set('fieldAliases', {'ชื่อสถานที่': 'ชื่อสถานที่', 'x': 'x', 'y': 'y', 'รูปภาพ': 'รูปภาพ', });
lyr__3.set('fieldAliases', {'ชื่อสถานที่': 'ชื่อสถานที่', 'x': 'x', 'y': 'y', 'รูปภาพ': 'รูปภาพ', });
lyr__1.set('fieldImages', {'ชื่อสถานที่': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'รูปภาพ': 'TextEdit', });
lyr__2.set('fieldImages', {'ชื่อสถานที่': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'รูปภาพ': 'TextEdit', });
lyr__3.set('fieldImages', {'ชื่อสถานที่': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'รูปภาพ': 'TextEdit', });
lyr__1.set('fieldLabels', {'ชื่อสถานที่': 'header label - always visible', 'x': 'no label', 'y': 'no label', 'รูปภาพ': 'header label - always visible', });
lyr__2.set('fieldLabels', {'ชื่อสถานที่': 'header label - always visible', 'x': 'no label', 'y': 'no label', 'รูปภาพ': 'header label - always visible', });
lyr__3.set('fieldLabels', {'ชื่อสถานที่': 'header label - always visible', 'x': 'no label', 'y': 'no label', 'รูปภาพ': 'header label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});