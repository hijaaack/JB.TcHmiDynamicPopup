// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.42/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var JB_TcHmiDynamicPopup;
        (function (JB_TcHmiDynamicPopup) {
            function CreatePopup(popupId, targetFile, popupHeader, modal, movable, destination, width, height, left, top) {

                var id = "";

                //Check if usercontrol or content
                if (targetFile.path.toLowerCase().endsWith(".content")) {
                    id = popupId + ".Region";
                } else if (targetFile.path.toLowerCase().endsWith(".usercontrol")) {
                    id = popupId + ".UserControlHost";
                } else {
                    return; //wrong type
                }

                // Search for an element with a specific ID
                const popupExists = document.getElementById(id);

                // Check if the element exists
                if (popupExists) {
                    return;
                }
                else {
                    try {
                        //get the popup provider
                        const popupUiProvider = TcHmi.UiProvider.getPreferredProvider("popup");
                        var popupHost = null;

                        if (targetFile.path.toLowerCase().endsWith(".content")) {

                            //Create default parameters for the popup
                            let parameters = {
                                "data-tchmi-target-content": targetFile.path,
                                "data-tchmi-left": 0,
                                "data-tchmi-top": 0,
                                "data-tchmi-width": 100,
                                "data-tchmi-height": 100,
                                "data-tchmi-width-unit": "%",
                                "data-tchmi-height-unit": "%"
                            };
                            //Create UserControl
                            popupHost = TcHmi.ControlFactory.createEx(
                                "TcHmi.Controls.System.TcHmiRegion",
                                id,
                                parameters
                            );

                        } else if (targetFile.path.toLowerCase().endsWith(".usercontrol")) {

                            //Create default parameters for the popup
                            let parameters = {
                                "data-tchmi-target-user-control": targetFile.path,
                                "data-tchmi-left": 0,
                                "data-tchmi-top": 0,
                                "data-tchmi-width": 100,
                                "data-tchmi-height": 100,
                                "data-tchmi-width-unit": "%",
                                "data-tchmi-height-unit": "%"
                            };
                            //Create partial parameters for the popup
                            let attributes = targetFile.attributes;
                            for (const key in attributes) {
                                if (attributes.hasOwnProperty(key)) {
                                    parameters[key] = attributes[key];
                                }
                            }

                            //Create UserControl
                            popupHost = TcHmi.ControlFactory.createEx(
                                "TcHmi.Controls.System.TcHmiUserControlHost",
                                id,
                                parameters
                            );

                        }

                        const popupElement = popupHost.getElement()[0]; //retrieve html-element
                        const popupDestination = TcHmi.Controls.get(destination); //get destination control
                        const popup = popupUiProvider.createHtmlElementBox(popupHeader, popupElement, {}, popupDestination);

                        if (modal) {
                            popup.setBackgroundMode(TcHmi.UiProvider.PopupProvider.BackgroundMode.Dimmed);
                            popup.setPositioningMode(TcHmi.UiProvider.PopupProvider.PositioningMode.Centered);
                            popup.setMovable(false);
                        } else {
                            popup.setBackgroundMode(TcHmi.UiProvider.PopupProvider.BackgroundMode.None);
                            popup.setPositioningMode(TcHmi.UiProvider.PopupProvider.PositioningMode.Floating);
                            popup.setMovable(movable);
                        }

                        popup.setBounds({
                            width: width,
                            height: height,
                            left: left,
                            top: top
                        });

                        popup.setCloseButton(true);
                        popup.show();

                        TcHmi.EventProvider.register(id + ".onDetached", (e, data) => {
                            popup.destroy();
                            popupHost.destroy();
                            e.destroy();
                        });

                    } catch (e) {
                        console.error(e);
                    }
                }
            }
            JB_TcHmiDynamicPopup.CreatePopup = CreatePopup;
        })(JB_TcHmiDynamicPopup = Functions.JB_TcHmiDynamicPopup || (Functions.JB_TcHmiDynamicPopup = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CreatePopup', 'TcHmi.Functions.JB_TcHmiDynamicPopup', TcHmi.Functions.JB_TcHmiDynamicPopup.CreatePopup);
