(function(window, undefined) {
  var dictionary = {
    "40f14dd2-7ef0-4428-828a-204c94ec073a": "medicationsglucose",
    "929b8434-f5ca-4fbc-aa88-8911f2883afa": "newvitalstables",
    "98b6ab21-74ed-447a-b81b-724510a9e20f": "qualitymetrics",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "vitals",
    "3677eaa6-b044-4a2e-86cd-85c8008dbfe8": "microbiologysensitivityanalysis",
    "6a87a9e1-4d0d-48a8-8302-13904c97dd36": "newvitals",
    "b268ff96-44fa-43a5-9589-6845b7d1d007": "radiology",
    "24327940-c306-4e4b-bc40-ce4fbe7fa94f": "notes",
    "37a24168-5044-4d38-bc27-4e7e0d1bf2e8": "medicationsbloodpressure",
    "e460cd2d-61df-4388-8b28-edfe88d5f09b": "microbiology",
    "39e3537d-ca4e-466b-a0c6-3357f58e0ce4": "medicationsanticoagulation",
    "3ecd9857-b0f7-4516-97b9-df26dcf158b5": "labs",
    "b0396fc3-c557-484f-b4e6-ed2ea47508ec": "medicationshome",
    "afcdd234-cfae-4e3d-a820-7292c1daaf24": "medicationslast24",
    "7bf28396-f65f-43b8-82bc-c2f9e535e93c": "medicationsantibiotics",
    "37ff5a81-4f35-4935-8ead-edd8d946fa1f": "medicationsactive",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "5f6bc502-28ca-4c8f-b32d-e466e0d663f4": "vitalsleft",
    "c5aa8754-70ca-4b49-832d-98598849ceef": "medicationsdropdown",
    "b91813a0-c94c-41e7-bb4c-817e92520087": "menu"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);