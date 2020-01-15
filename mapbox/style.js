
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "APE_DataLimits_munis_0": {
            "type": "geojson",
            "data": json_APE_DataLimits_munis_0
        }
                    ,
        "NDVIAbsencia_1": {
            "type": "geojson",
            "data": json_NDVIAbsencia_1
        }
                    ,
        "NDVIBaix_2": {
            "type": "geojson",
            "data": json_NDVIBaix_2
        }
                    ,
        "NDVIMitj_3": {
            "type": "geojson",
            "data": json_NDVIMitj_3
        }
                    ,
        "NDVIALT_4": {
            "type": "geojson",
            "data": json_NDVIALT_4
        }
                    ,
        "NDVIMitjana_5": {
            "type": "geojson",
            "data": json_NDVIMitjana_5
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#4c4c4c"
            }
        },
        {
            "id": "lyr_APE_DataLimits_munis_0_0",
            "type": "fill",
            "source": "APE_DataLimits_munis_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#f0f0f0', "fill-outline-color":"#6a6a6a"}
        }
,
        {
            "id": "lyr_NDVIAbsencia_1_0",
            "type": "fill",
            "source": "NDVIAbsencia_1",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['*', ['get', 'NDVI_Abs_Per'], 100], 0.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 20.0]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Abs_Per'], 100], 20.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 40.0]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Abs_Per'], 100], 40.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 60.0]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Abs_Per'], 100], 60.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 80.0]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Abs_Per'], 100], 80.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 100.0]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['*', ['get', 'NDVI_Abs_Per'], 100], 0.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 20.0]], '#fff5f0', ['all', ['>', ['*', ['get', 'NDVI_Abs_Per'], 100], 20.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 40.0]], '#fdbea5', ['all', ['>', ['*', ['get', 'NDVI_Abs_Per'], 100], 40.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 60.0]], '#fc7050', ['all', ['>', ['*', ['get', 'NDVI_Abs_Per'], 100], 60.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 80.0]], '#d42020', ['all', ['>', ['*', ['get', 'NDVI_Abs_Per'], 100], 80.0], ['<=', ['*', ['get', 'NDVI_Abs_Per'], 100], 100.0]], '#67000d', '#ffffff']}
        }
,
        {
            "id": "lyr_NDVIBaix_2_0",
            "type": "fill",
            "source": "NDVIBaix_2",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['*', ['get', 'NDVI_Baix_Per'], 100], 0.0], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 15.024876]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Baix_Per'], 100], 15.024876], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 30.049751]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Baix_Per'], 100], 30.049751], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 45.074627]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Baix_Per'], 100], 45.074627], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 60.099502]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Baix_Per'], 100], 60.099502], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 75.124378]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['*', ['get', 'NDVI_Baix_Per'], 100], 0.0], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 15.024876]], '#f7fecb', ['all', ['>', ['*', ['get', 'NDVI_Baix_Per'], 100], 15.024876], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 30.049751]], '#f6faa7', ['all', ['>', ['*', ['get', 'NDVI_Baix_Per'], 100], 30.049751], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 45.074627]], '#f2ed7e', ['all', ['>', ['*', ['get', 'NDVI_Baix_Per'], 100], 45.074627], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 60.099502]], '#f6f641', ['all', ['>', ['*', ['get', 'NDVI_Baix_Per'], 100], 60.099502], ['<=', ['*', ['get', 'NDVI_Baix_Per'], 100], 75.124378]], '#f5f500', '#ffffff']}
        }
,
        {
            "id": "lyr_NDVIMitj_3_0",
            "type": "fill",
            "source": "NDVIMitj_3",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 0.0], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 16.739812]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Mitj_Per'], 100], 16.739812], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 33.479624]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Mitj_Per'], 100], 33.479624], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 50.219436]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Mitj_Per'], 100], 50.219436], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 66.959248]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Mitj_Per'], 100], 66.959248], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 83.69906]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 0.0], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 16.739812]], '#fff5eb', ['all', ['>', ['*', ['get', 'NDVI_Mitj_Per'], 100], 16.739812], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 33.479624]], '#fed2a6', ['all', ['>', ['*', ['get', 'NDVI_Mitj_Per'], 100], 33.479624], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 50.219436]], '#fd9243', ['all', ['>', ['*', ['get', 'NDVI_Mitj_Per'], 100], 50.219436], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 66.959248]], '#df4f05', ['all', ['>', ['*', ['get', 'NDVI_Mitj_Per'], 100], 66.959248], ['<=', ['*', ['get', 'NDVI_Mitj_Per'], 100], 83.69906]], '#7f2704', '#ffffff']}
        }
,
        {
            "id": "lyr_NDVIALT_4_0",
            "type": "fill",
            "source": "NDVIALT_4",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['*', ['get', 'NDVI_Alt_Per'], 100], 0.0], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 18.903351]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Alt_Per'], 100], 18.903351], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 37.806702]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Alt_Per'], 100], 37.806702], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 56.710053]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Alt_Per'], 100], 56.710053], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 75.613403]], 1.0, ['all', ['>', ['*', ['get', 'NDVI_Alt_Per'], 100], 75.613403], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 94.516754]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['*', ['get', 'NDVI_Alt_Per'], 100], 0.0], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 18.903351]], '#f7fcf5', ['all', ['>', ['*', ['get', 'NDVI_Alt_Per'], 100], 18.903351], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 37.806702]], '#caeac3', ['all', ['>', ['*', ['get', 'NDVI_Alt_Per'], 100], 37.806702], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 56.710053]], '#7bc87c', ['all', ['>', ['*', ['get', 'NDVI_Alt_Per'], 100], 56.710053], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 75.613403]], '#2a924a', ['all', ['>', ['*', ['get', 'NDVI_Alt_Per'], 100], 75.613403], ['<=', ['*', ['get', 'NDVI_Alt_Per'], 100], 94.516754]], '#00441b', '#ffffff']}
        }
,
        {
            "id": "lyr_NDVIMitjana_5_0",
            "type": "fill",
            "source": "NDVIMitjana_5",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['get', 'NDVI_Mean'], 0.01954], ['<=', ['get', 'NDVI_Mean'], 0.228357]], 1.0, ['all', ['>', ['get', 'NDVI_Mean'], 0.228357], ['<=', ['get', 'NDVI_Mean'], 0.314156]], 1.0, ['all', ['>', ['get', 'NDVI_Mean'], 0.314156], ['<=', ['get', 'NDVI_Mean'], 0.407068]], 1.0, ['all', ['>', ['get', 'NDVI_Mean'], 0.407068], ['<=', ['get', 'NDVI_Mean'], 0.728086]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['get', 'NDVI_Mean'], 0.01954], ['<=', ['get', 'NDVI_Mean'], 0.228357]], '#ebeb0f', ['all', ['>', ['get', 'NDVI_Mean'], 0.228357], ['<=', ['get', 'NDVI_Mean'], 0.314156]], '#ec8226', ['all', ['>', ['get', 'NDVI_Mean'], 0.314156], ['<=', ['get', 'NDVI_Mean'], 0.407068]], '#67c832', ['all', ['>', ['get', 'NDVI_Mean'], 0.407068], ['<=', ['get', 'NDVI_Mean'], 0.728086]], '#296d34', '#ffffff']}
        }
],
}