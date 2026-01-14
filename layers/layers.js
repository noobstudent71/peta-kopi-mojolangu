var wms_layers = [];

var format_fasilitasumum_0 = new ol.format.GeoJSON();
var features_fasilitasumum_0 = format_fasilitasumum_0.readFeatures(json_fasilitasumum_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitasumum_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitasumum_0.addFeatures(features_fasilitasumum_0);
var lyr_fasilitasumum_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitasumum_0, 
                style: style_fasilitasumum_0,
                popuplayertitle: 'fasilitas umum',
                interactive: true,
                title: '<img src="styles/legend/fasilitasumum_0.png" /> fasilitas umum'
            });
var format_batasareamojolangu_1 = new ol.format.GeoJSON();
var features_batasareamojolangu_1 = format_batasareamojolangu_1.readFeatures(json_batasareamojolangu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasareamojolangu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasareamojolangu_1.addFeatures(features_batasareamojolangu_1);
var lyr_batasareamojolangu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasareamojolangu_1, 
                style: style_batasareamojolangu_1,
                popuplayertitle: 'batas area mojolangu',
                interactive: true,
                title: '<img src="styles/legend/batasareamojolangu_1.png" /> batas area mojolangu'
            });
var format_batasareatunjungsekar_2 = new ol.format.GeoJSON();
var features_batasareatunjungsekar_2 = format_batasareatunjungsekar_2.readFeatures(json_batasareatunjungsekar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasareatunjungsekar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasareatunjungsekar_2.addFeatures(features_batasareatunjungsekar_2);
var lyr_batasareatunjungsekar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasareatunjungsekar_2, 
                style: style_batasareatunjungsekar_2,
                popuplayertitle: 'batas area tunjungsekar',
                interactive: true,
                title: '<img src="styles/legend/batasareatunjungsekar_2.png" /> batas area tunjungsekar'
            });
var format_bataspemukiman_3 = new ol.format.GeoJSON();
var features_bataspemukiman_3 = format_bataspemukiman_3.readFeatures(json_bataspemukiman_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataspemukiman_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataspemukiman_3.addFeatures(features_bataspemukiman_3);
var lyr_bataspemukiman_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataspemukiman_3, 
                style: style_bataspemukiman_3,
                popuplayertitle: 'batas pemukiman',
                interactive: true,
                title: '<img src="styles/legend/bataspemukiman_3.png" /> batas pemukiman'
            });
var format_jalanperumahan_4 = new ol.format.GeoJSON();
var features_jalanperumahan_4 = format_jalanperumahan_4.readFeatures(json_jalanperumahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanperumahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanperumahan_4.addFeatures(features_jalanperumahan_4);
var lyr_jalanperumahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanperumahan_4, 
                style: style_jalanperumahan_4,
                popuplayertitle: 'jalan perumahan',
                interactive: true,
                title: '<img src="styles/legend/jalanperumahan_4.png" /> jalan perumahan'
            });
var format_jalandesa_5 = new ol.format.GeoJSON();
var features_jalandesa_5 = format_jalandesa_5.readFeatures(json_jalandesa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandesa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesa_5.addFeatures(features_jalandesa_5);
var lyr_jalandesa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesa_5, 
                style: style_jalandesa_5,
                popuplayertitle: 'jalan desa',
                interactive: true,
                title: '<img src="styles/legend/jalandesa_5.png" /> jalan desa'
            });
var format_jalanraya_6 = new ol.format.GeoJSON();
var features_jalanraya_6 = format_jalanraya_6.readFeatures(json_jalanraya_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanraya_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanraya_6.addFeatures(features_jalanraya_6);
var lyr_jalanraya_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanraya_6, 
                style: style_jalanraya_6,
                popuplayertitle: 'jalan raya',
                interactive: true,
                title: '<img src="styles/legend/jalanraya_6.png" /> jalan raya'
            });
var format_jalangang_7 = new ol.format.GeoJSON();
var features_jalangang_7 = format_jalangang_7.readFeatures(json_jalangang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalangang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalangang_7.addFeatures(features_jalangang_7);
var lyr_jalangang_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalangang_7, 
                style: style_jalangang_7,
                popuplayertitle: 'jalan gang',
                interactive: true,
                title: '<img src="styles/legend/jalangang_7.png" /> jalan gang'
            });
var format_jalanprovinsi_8 = new ol.format.GeoJSON();
var features_jalanprovinsi_8 = format_jalanprovinsi_8.readFeatures(json_jalanprovinsi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanprovinsi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanprovinsi_8.addFeatures(features_jalanprovinsi_8);
var lyr_jalanprovinsi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanprovinsi_8, 
                style: style_jalanprovinsi_8,
                popuplayertitle: 'jalan provinsi',
                interactive: true,
                title: '<img src="styles/legend/jalanprovinsi_8.png" /> jalan provinsi'
            });
var format_sungai_9 = new ol.format.GeoJSON();
var features_sungai_9 = format_sungai_9.readFeatures(json_sungai_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_9.addFeatures(features_sungai_9);
var lyr_sungai_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_9, 
                style: style_sungai_9,
                popuplayertitle: 'sungai',
                interactive: true,
                title: '<img src="styles/legend/sungai_9.png" /> sungai'
            });
var format_coffesho_10 = new ol.format.GeoJSON();
var features_coffesho_10 = format_coffesho_10.readFeatures(json_coffesho_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coffesho_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coffesho_10.addFeatures(features_coffesho_10);
var lyr_coffesho_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coffesho_10, 
                style: style_coffesho_10,
                popuplayertitle: 'coffesho[',
                interactive: true,
                title: '<img src="styles/legend/coffesho_10.png" /> coffesho['
            });

lyr_fasilitasumum_0.setVisible(true);lyr_batasareamojolangu_1.setVisible(true);lyr_batasareatunjungsekar_2.setVisible(true);lyr_bataspemukiman_3.setVisible(true);lyr_jalanperumahan_4.setVisible(true);lyr_jalandesa_5.setVisible(true);lyr_jalanraya_6.setVisible(true);lyr_jalangang_7.setVisible(true);lyr_jalanprovinsi_8.setVisible(true);lyr_sungai_9.setVisible(true);lyr_coffesho_10.setVisible(true);
var layersList = [lyr_fasilitasumum_0,lyr_batasareamojolangu_1,lyr_batasareatunjungsekar_2,lyr_bataspemukiman_3,lyr_jalanperumahan_4,lyr_jalandesa_5,lyr_jalanraya_6,lyr_jalangang_7,lyr_jalanprovinsi_8,lyr_sungai_9,lyr_coffesho_10];
lyr_fasilitasumum_0.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'hektar': 'hektar', });
lyr_batasareamojolangu_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'hektar': 'hektar', });
lyr_batasareatunjungsekar_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'hektar': 'hektar', });
lyr_bataspemukiman_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'hektar': 'hektar', });
lyr_jalanperumahan_4.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_jalandesa_5.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_jalanraya_6.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_jalangang_7.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_jalanprovinsi_8.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_sungai_9.set('fieldAliases', {'id': 'id', 'nma sungai': 'nma sungai', 'panjang': 'panjang', 'panjang_km': 'panjang_km', });
lyr_coffesho_10.set('fieldAliases', {'id': 'id', 'nama tempt': 'nama tempt', 'alamat': 'alamat', });
lyr_fasilitasumum_0.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'hektar': '', });
lyr_batasareamojolangu_1.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'hektar': '', });
lyr_batasareatunjungsekar_2.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'hektar': '', });
lyr_bataspemukiman_3.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'hektar': '', });
lyr_jalanperumahan_4.set('fieldImages', {'id': '', 'nama jalan': '', 'panjang': '', 'panjang_km': '', });
lyr_jalandesa_5.set('fieldImages', {'id': '', 'nama jalan': '', 'panjang': '', 'panjang_km': '', });
lyr_jalanraya_6.set('fieldImages', {'id': '', 'nama jalan': '', 'panjang': '', 'panjang_km': '', });
lyr_jalangang_7.set('fieldImages', {'id': '', 'nama jalan': '', 'panjang': '', 'panjang_km': '', });
lyr_jalanprovinsi_8.set('fieldImages', {'id': '', 'nama jalan': '', 'panjang': '', 'panjang_km': '', });
lyr_sungai_9.set('fieldImages', {'id': '', 'nma sungai': '', 'panjang': '', 'panjang_km': '', });
lyr_coffesho_10.set('fieldImages', {'id': '', 'nama tempt': '', 'alamat': '', });
lyr_fasilitasumum_0.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'hektar': 'no label', });
lyr_batasareamojolangu_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'hektar': 'no label', });
lyr_batasareatunjungsekar_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'hektar': 'no label', });
lyr_bataspemukiman_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'hektar': 'no label', });
lyr_jalanperumahan_4.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_jalandesa_5.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_jalanraya_6.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_jalangang_7.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_jalanprovinsi_8.set('fieldLabels', {'id': 'no label', 'nama jalan': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_sungai_9.set('fieldLabels', {'id': 'no label', 'nma sungai': 'no label', 'panjang': 'no label', 'panjang_km': 'no label', });
lyr_coffesho_10.set('fieldLabels', {'id': 'no label', 'nama tempt': 'no label', 'alamat': 'no label', });
lyr_coffesho_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});