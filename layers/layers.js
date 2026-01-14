var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_coffesho_1 = new ol.format.GeoJSON();
var features_coffesho_1 = format_coffesho_1.readFeatures(json_coffesho_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coffesho_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coffesho_1.addFeatures(features_coffesho_1);
var lyr_coffesho_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coffesho_1, 
                style: style_coffesho_1,
                popuplayertitle: 'coffesho[',
                interactive: true,
                title: '<img src="styles/legend/coffesho_1.png" /> coffesho['
            });
var format_sungai_2 = new ol.format.GeoJSON();
var features_sungai_2 = format_sungai_2.readFeatures(json_sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_2.addFeatures(features_sungai_2);
var lyr_sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_2, 
                style: style_sungai_2,
                popuplayertitle: 'sungai',
                interactive: true,
                title: '<img src="styles/legend/sungai_2.png" /> sungai'
            });
var format_fasilitasumum_3 = new ol.format.GeoJSON();
var features_fasilitasumum_3 = format_fasilitasumum_3.readFeatures(json_fasilitasumum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitasumum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitasumum_3.addFeatures(features_fasilitasumum_3);
var lyr_fasilitasumum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitasumum_3, 
                style: style_fasilitasumum_3,
                popuplayertitle: 'fasilitas umum',
                interactive: true,
                title: '<img src="styles/legend/fasilitasumum_3.png" /> fasilitas umum'
            });
var format_batasareamojolangu_4 = new ol.format.GeoJSON();
var features_batasareamojolangu_4 = format_batasareamojolangu_4.readFeatures(json_batasareamojolangu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasareamojolangu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasareamojolangu_4.addFeatures(features_batasareamojolangu_4);
var lyr_batasareamojolangu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasareamojolangu_4, 
                style: style_batasareamojolangu_4,
                popuplayertitle: 'batas area mojolangu',
                interactive: true,
                title: '<img src="styles/legend/batasareamojolangu_4.png" /> batas area mojolangu'
            });
var format_batasareatunjungsekar_5 = new ol.format.GeoJSON();
var features_batasareatunjungsekar_5 = format_batasareatunjungsekar_5.readFeatures(json_batasareatunjungsekar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasareatunjungsekar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasareatunjungsekar_5.addFeatures(features_batasareatunjungsekar_5);
var lyr_batasareatunjungsekar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasareatunjungsekar_5, 
                style: style_batasareatunjungsekar_5,
                popuplayertitle: 'batas area tunjungsekar',
                interactive: true,
                title: '<img src="styles/legend/batasareatunjungsekar_5.png" /> batas area tunjungsekar'
            });
var format_bataspemukiman_6 = new ol.format.GeoJSON();
var features_bataspemukiman_6 = format_bataspemukiman_6.readFeatures(json_bataspemukiman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataspemukiman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataspemukiman_6.addFeatures(features_bataspemukiman_6);
var lyr_bataspemukiman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataspemukiman_6, 
                style: style_bataspemukiman_6,
                popuplayertitle: 'batas pemukiman',
                interactive: true,
                title: '<img src="styles/legend/bataspemukiman_6.png" /> batas pemukiman'
            });
var format_jalanperumahan_7 = new ol.format.GeoJSON();
var features_jalanperumahan_7 = format_jalanperumahan_7.readFeatures(json_jalanperumahan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanperumahan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanperumahan_7.addFeatures(features_jalanperumahan_7);
var lyr_jalanperumahan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanperumahan_7, 
                style: style_jalanperumahan_7,
                popuplayertitle: 'jalan perumahan',
                interactive: true,
                title: '<img src="styles/legend/jalanperumahan_7.png" /> jalan perumahan'
            });
var format_jalandesa_8 = new ol.format.GeoJSON();
var features_jalandesa_8 = format_jalandesa_8.readFeatures(json_jalandesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesa_8.addFeatures(features_jalandesa_8);
var lyr_jalandesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesa_8, 
                style: style_jalandesa_8,
                popuplayertitle: 'jalan desa',
                interactive: true,
                title: '<img src="styles/legend/jalandesa_8.png" /> jalan desa'
            });
var format_jalanraya_9 = new ol.format.GeoJSON();
var features_jalanraya_9 = format_jalanraya_9.readFeatures(json_jalanraya_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanraya_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanraya_9.addFeatures(features_jalanraya_9);
var lyr_jalanraya_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanraya_9, 
                style: style_jalanraya_9,
                popuplayertitle: 'jalan raya',
                interactive: true,
                title: '<img src="styles/legend/jalanraya_9.png" /> jalan raya'
            });
var format_jalangang_10 = new ol.format.GeoJSON();
var features_jalangang_10 = format_jalangang_10.readFeatures(json_jalangang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalangang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalangang_10.addFeatures(features_jalangang_10);
var lyr_jalangang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalangang_10, 
                style: style_jalangang_10,
                popuplayertitle: 'jalan gang',
                interactive: true,
                title: '<img src="styles/legend/jalangang_10.png" /> jalan gang'
            });
var format_jalanprovinsi_11 = new ol.format.GeoJSON();
var features_jalanprovinsi_11 = format_jalanprovinsi_11.readFeatures(json_jalanprovinsi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanprovinsi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanprovinsi_11.addFeatures(features_jalanprovinsi_11);
var lyr_jalanprovinsi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanprovinsi_11, 
                style: style_jalanprovinsi_11,
                popuplayertitle: 'jalan provinsi',
                interactive: true,
                title: '<img src="styles/legend/jalanprovinsi_11.png" /> jalan provinsi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_coffesho_1.setVisible(true);lyr_sungai_2.setVisible(true);lyr_fasilitasumum_3.setVisible(true);lyr_batasareamojolangu_4.setVisible(true);lyr_batasareatunjungsekar_5.setVisible(true);lyr_bataspemukiman_6.setVisible(true);lyr_jalanperumahan_7.setVisible(true);lyr_jalandesa_8.setVisible(true);lyr_jalanraya_9.setVisible(true);lyr_jalangang_10.setVisible(true);lyr_jalanprovinsi_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_coffesho_1,lyr_sungai_2,lyr_fasilitasumum_3,lyr_batasareamojolangu_4,lyr_batasareatunjungsekar_5,lyr_bataspemukiman_6,lyr_jalanperumahan_7,lyr_jalandesa_8,lyr_jalanraya_9,lyr_jalangang_10,lyr_jalanprovinsi_11];
lyr_coffesho_1.set('fieldAliases', {'id': 'id', 'nama tempt': 'nama tempt', 'alamat': 'alamat', });
lyr_sungai_2.set('fieldAliases', {'id': 'id', 'nma sungai': 'nma sungai', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_fasilitasumum_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'hektar': 'hektar', });
lyr_batasareamojolangu_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'hektar': 'hektar', });
lyr_batasareatunjungsekar_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'hektar': 'hektar', });
lyr_bataspemukiman_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'hektar': 'hektar', });
lyr_jalanperumahan_7.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_jalandesa_8.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_jalanraya_9.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_jalangang_10.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_jalanprovinsi_11.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_coffesho_1.set('fieldImages', {'id': '', 'nama tempt': '', 'alamat': '', });
lyr_sungai_2.set('fieldImages', {'id': '', 'nma sungai': '', 'panjang': '', 'panjang_km': '', });
lyr_fasilitasumum_3.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'hektar': '', });
lyr_batasareamojolangu_4.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'hektar': '', });
lyr_batasareatunjungsekar_5.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'hektar': '', });
lyr_bataspemukiman_6.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'hektar': '', });
lyr_jalanperumahan_7.set('fieldImages', {'id': '', 'nama jalan': '', 'panjang': '', 'panjang_km': '', });
lyr_jalandesa_8.set('fieldImages', {'id': '', 'nama jalan': '', 'panjang': '', 'panjang_km': '', });
lyr_jalanraya_9.set('fieldImages', {'id': '', 'nama jalan': '', 'panjang': '', 'panjang_km': '', });
lyr_jalangang_10.set('fieldImages', {'id': 'TextEdit', 'nama jalan': 'TextEdit', 'panjang': 'TextEdit', 'panjang_km': 'TextEdit', });
lyr_jalanprovinsi_11.set('fieldImages', {'id': 'TextEdit', 'nama jalan': 'TextEdit', 'panjang': 'TextEdit', 'panjang_km': 'TextEdit', });
lyr_coffesho_1.set('fieldLabels', {'id': 'no label', 'nama tempt': 'no label', 'alamat': 'no label', });
lyr_sungai_2.set('fieldLabels', {'id': 'no label', 'nma sungai': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_fasilitasumum_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'hektar': 'no label', });
lyr_batasareamojolangu_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'hektar': 'no label', });
lyr_batasareatunjungsekar_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'hektar': 'no label', });
lyr_bataspemukiman_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'hektar': 'no label', });
lyr_jalanperumahan_7.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_jalandesa_8.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_jalanraya_9.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_jalangang_10.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_jalanprovinsi_11.set('fieldLabels', {'id': 'inline label - always visible', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'inline label - visible with data', });
lyr_jalanprovinsi_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});