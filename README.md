# My Maples
An Ionic 3 hybrid mobile application for Android and iOS using the ionic storage module for indexeddb/sqlite and the capacitor geo location native module.  This application is for maple syrup hobbyists who have numerous maple trees on their property and want to store the maple tree geo-locations, the sap production for each tree and keep track of metrics for how much sap each tree has produced in a season.

#### Created by: Tracy Mazelin ####

# Main features: #

- Add maple trees
    - Detect tree longitude and latitude via the ionic native GPS module
    - Add tree circumference
    - Calculate the number of taps the tree can support based on the circumference
    - Add tap date
    - Add comments about the tree
    - Give the tree a nickname for easy identification
    - Edit tree details
    - Delete trees
- Add sap quantity by tree
    - Add date the sap was collected
    - Add quantity the tree produced
- Metrics
    - View total sap produced by tree
    - View total sap produced for all trees for the season


# Installation

    $ git clone https://github.com/tracymazelin/MyMaples
    $ cd my-maples
    $ npm i
    $ ionic serve
 

| Screenshots                                                 |                                                                |          
|-------------------------------------------------------------|----------------------------------------------------------------|
| ![Zero state trees](src/screenshots/zero-state-trees.png)   | ![Zero state metrics](src/screenshots/zero-state-metrics.png)  |
| ![Zero state metrics](src/screenshots/add-tree.png)         | ![Zero state metrics](src/screenshots/trees.png)               |
| ![Zero state metrics](src/screenshots/action-sheet.png)     | ![Zero state metrics](src/screenshots/dates.png)               | 
| ![Zero state metrics](src/screenshots/add-sap.png)          | ![Zero state metrics](src/screenshots/get-geo-location.png)    |
| ![Zero state metrics](src/screenshots/toaster.png)          | ![Zero state metrics](src/screenshots/metrics.png)             |
