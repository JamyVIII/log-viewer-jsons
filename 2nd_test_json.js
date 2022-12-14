[
{
    "title": "MORE_LOGS",
    "version": "0.01",
    "graph_type": "plot",
    "chart_config" : {
        "name": "MORE_LOGS",
        "y_label": "",
        "series_name_enabled": true,
        "height": 350,
        "data_processor": "generateChartSeriesDefault",
        "disable_markers": true,
        "disable_point_click": true,
        "channel_tooltip_formatter": true
    },
    "plot_config" : {
        "color_table": "TAB20_TABLE",
        "minVal": 0, 
        "maxVal": 9.5,
        "plotBandHeight": 10,
        "bands": [
            {
                "label": "Events",
                "offset": 0,
                "plotBandHeight": 5,
                "data": [
                    {
                        "val":"ndk_rebuffer",
                        "label":"Rebuffers (NDK)",
                        "log_ids":["mstar.vdec.aud.underrun", "avpl.es.underrun"],
                        "description":"Other Rebuffers (NDK, MSTAR)",
                        "config" : {
                            "line_type": "single_event",
                            "show": true,
                            "color_order": 9,
                            "minVal": 0,
                            "maxVal": 4.75,
                            "mapping": {
                                "func": "mapValueToYCoord",
                                "minVal": 0,
                                "maxVal": 4.75,
                                "default_val": 4,
                                "dict": {
                                    "undefined": "undefined"
                                }
                            },
                            "with_data_range": false
                        }
                    }
                ]
            },
            {
                "label": "Buffering",
                "offset": 5,
                "plotBandHeight": 10,
                "grid_config": [
                    {
                        "step": 2,
                        "scale": 5, 
                        "unit": "Mbps", 
                        "offset": 0, 
                        "position": "left"
                    }
                ],                       
                "data": [
                    {         
                        "val":"km_mp_buff_sel_bitrate",
                        "label":"Sel. Bitrate (buff)",
                        "log_ids":["km.mp.buff"],
                        "unit": "Mbps",
                        "formatting": {"args": "val", "body": "return Number((val/1E6).toFixed(3))"},
                        "description":"Bitrate selected. It is a label assigned by the partner. [bits-per-second]",
                        "data" : {"idx":5, "type":"num", "field":"sel_rate"},
                        "config" : {
                            "line_type": "step_right",
                            "show": true,
                            "color_order": 0,
                            "mapping": {
                                "func": "scaleValueToYCoord",
                                "scaling_factor": 0.0000002,
                                "scaling_bias": 0
                            },
                            "with_data_range": false
                        }
                    }, {
                        "val":"km_mp_buff_average",
                        "label":"Avg Speed",
                        "log_ids":["km.mp.buff"],
                        "unit": "Mbps",
                        "formatting": {"args": "val", "body": "return Number((val/1E6).toFixed(3))"},
                        "description":"Average measured network speed since the previous log",
                        "data" : {"idx":8,  "type":"num", "field":"rate_avg"},
                        "config" : {
                            "line_type": "step_right",
                            "show": true,
                            "color_order": 4,
                            "mapping": {
                                "func": "scaleValueToYCoord",
                                "scaling_factor": 0.0000002,
                                "scaling_bias": 0
                            },
                            "with_data_range": false
                        }
                    }, {
                        "val":"km_mp_buff_lowest_br",
                        "label":"Lowest BR",
                        "log_ids":"km.mp.buff",
                        "unit": "Mbps",
                        "formatting": {"args": "val", "body": "return Number((val/1E6).toFixed(3))"},
                        "description":"The lowest available bitrate for selection. [bits-per-second]",
                        "data" : {"idx":26, "type":"num", "field":"lowest_br"},
                        "config" : {
                            "line_type": "step_right",
                            "show": true,
                            "color_order": 2,
                            "mapping": {
                                "func": "scaleValueToYCoord",
                                "scaling_factor": 0.0000002,
                                "scaling_bias": 0
                            },
                            "with_data_range": false
                        }
                    }
                ]
            },
            {
                "label": "Decoder",
                "offset": 15,
                "plotBandHeight": 10,
                "grid_config": [
                    {
                        "step": 2,
                        "scale": 5, 
                        "unit": "Mbps", 
                        "offset": 0, 
                        "position": "left"
                    },
                    {
                        "step": 2,
                        "scale": 50, 
                        "unit": "Kbps", 
                        "offset": 0, 
                        "position": "right"
                    }
                ],                       
                "data": [
                    {         
                        "val":"km_mp_play_avg_audio_bitrate",
                        "label":"Avg Audio Rate",
                        "log_ids":["km.mp.play"],
                        "unit": "Kbps",        
                        "formatting": {"args": "val", "body": "return Number((val/1E3).toFixed(0))"},
                        "description":"Average Audio Bitrate since last Occurence of log, in bits/s",
                        "data" : {"idx":24, "type":"num", "field":"aud_rate" },
                        "config" : {
                            "line_type": "step_right",
                            "show": true,
                            "color_order": 10,
                            "mapping": {
                                "func": "scaleValueToYCoord",
                                "scaling_factor": 0.00002,
                                "scaling_bias": 0,
                                "minRange": 1.2,
                                "maxRange": 3.4,
                                "default_val": 0.6,
                                "dict": {
                                    "Initial Connection": 4.0,
                                    "Start": 2.5,
                                    "Stop": 1.0,
                                    "undefined": "undefined"
                                }
                            },
                            "with_data_range": false
                        }
                    }, {
                        "val":"km_mp_play_avg_video_bitrate",
                        "label":"Avg Video Rate",
                        "log_ids":"km.mp.play",
                        "unit": "Mbps",
                        "formatting": {"args": "val", "body": "return Number((val/1E6).toFixed(3))"},
                        "description":"Average Video Bitrate since last occurence, in bits/s",
                        "data" : {"idx":26, "type":"num", "field":"vid_rate" },
                        "config" : {
                            "line_type": "step_right",
                            "show": true,
                            "color_order": 8,
                            "minVal": 0,
                            "maxVal": 9.5,
                            "mapping": {
                                "func": "scaleValueToYCoord",
                                "scaling_factor": 0.0000002,
                                "scaling_bias": 0
                            },
                            "with_data_range": false
                        }
                    }, {
                        "val":"km_mp_play_bitrate",
                        "label":"Sel. Bitrate (play)",
                        "log_ids":"km.mp.play",
                        "unit": "Mbps",
                        "formatting": {"args": "val", "body": "return Number((val/1E6).toFixed(3))"},
                        "description":"Selected video bitrate that was played for the elapsed time since last log. [bits-per-second]",
                        "data" : {"idx":21, "type":"num", "field":"rate" },
                        "config" : {
                            "line_type": "step_right",
                            "show": true,
                            "color_order": 6,
                            "mapping": {
                                "func": "scaleValueToYCoord",
                                "scaling_factor": 0.0000002,
                                "scaling_bias": 0
                            },
                            "with_data_range": false
                        }
                    } 
                ]
            }
        ]
    }
},
{
    "title": "EVEN_MORE_AND_MORE_LOGS",
    "version": "0.01",
    "graph_type": "plot",
    "chart_config" : {
        "name": "EVEN_MORE_AND_MORE_LOGS",
        "y_label": "",
        "series_name_enabled": true,
        "height": 350,
        "data_processor": "generateChartSeriesDefault",
        "disable_markers": true,
        "disable_point_click": true,
        "channel_tooltip_formatter": true
    },
    "plot_config" : {
        "color_table": "TAB20_TABLE",
        "minVal": 0, 
        "maxVal": 9.5,
        "plotBandHeight": 10,
        "bands": [
            {
                "label": "Beacon",
                "offset": 15,
                "plotBandHeight": 10,
                "grid_config": [
                    {
                        "step": 2,
                        "scale": 5, 
                        "unit": "Milisec", 
                        "offset": 0, 
                        "position": "left"
                    }
                ],                       
                "data": [
                    {         
                        "val":"bcn",
                        "label":"Beacon",
                        "log_ids":["bcn.cert.rept"],
                        "unit": "Milisec",        
                        "formatting": {"args": "val", "body": "return Number((val/1E3).toFixed(0))"},
                        "description":"Beacons test description",
                        "data" : {"idx":6, "type":"num", "field":"applaunch_duration" },
                        "config" : {
                            "line_type": "step_right",
                            "show": true,
                            "color_order": 10,
                            "mapping": {
                                "func": "scaleValueToYCoord",
                                "scaling_factor": 0.00002,
                                "scaling_bias": 0,
                                "minRange": 1.2,
                                "maxRange": 3.4,
                                "default_val": 0.6,
                                "dict": {
                                    "Initial Connection": 4.0,
                                    "Start": 2.5,
                                    "Stop": 1.0,
                                    "undefined": "undefined"
                                }
                            },
                            "with_data_range": false
                        }
                    }
                ]
            }
        ]
    }
}
]
