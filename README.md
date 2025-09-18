## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## JB.TcHmiDynamicPopup for TwinCAT HMI
Nuget package created for version 1.14.3.8

In version 1.12.760.x a new TcHmiPopup control was added to TwinCAT HMI.

Instead of having to add the Popup manually to the view/content this nuget package is dynamically creating a usercontrol/content by calling a javascript function and it will have the same look & feel as the new TcHmiPopup that you can find in the toolbox.

## Usage

The nuget package consists of only one function:
![enter image description here](https://user-images.githubusercontent.com/75740551/248800964-594a2e56-a628-4d41-bab2-1ebf181e80f6.png)

Use the function in any event (for example .onPressed in a button):
![enter image description here](https://user-images.githubusercontent.com/75740551/248801570-9c036b74-f4a3-4dc5-a8cb-0d4fe4cf6419.png)

Parameters in the function:
 - **popupId:** unique id for the popup (this is used so you dont accidentally open the same popup with the same data-bindings twice)
 - **targetFile:** choose .usercontrol or .content and also link the parameters if it's an .usercontrol file
 - **popupHeader:** header text for the popup
 - **buttons:** additional buttons (such as close-button or other custom ones)
 - **modal:** this will center the popup in the screen and add a darkened background, also not movable
 - **movable:** make the popup draggable
 - **destination:** where the popup should be added. If you are using the Desktop.view just type Desktop
 - **width:** size in px
 - **height:** size in px
 - **left:** position in px
 - **top:** position in px

## Screenshots

Without modal:
![enter image description here](https://user-images.githubusercontent.com/75740551/248812659-c8d6c72d-dca7-4f3b-b867-82654cbfa96d.png)

With modal:
![enter image description here](https://user-images.githubusercontent.com/75740551/248812711-613ea020-3b0f-43cc-98a7-e814884e4fce.png)

## Installation

Easiest way to install this package is inside your TwinCAT HMI Project. 
**Right click** References and click "Manage NuGet Packages.." then browse for the file and install it! 

![enter image description here](https://user-images.githubusercontent.com/75740551/101645035-32cef100-3a36-11eb-88f4-eeaccd3366d6.png)

 
