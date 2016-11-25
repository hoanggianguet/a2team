"use strict";
var choose_component_1 = require('./chooseAnswer/choose.component');
var write_component_1 = require('./writing/write.component');
var rac_component_1 = require('./completeSentence/rac.component');
exports.testRoutes = [
    { path: 'chooseAns', component: choose_component_1.ChooseComponent },
    { path: 'readAndWrite', component: rac_component_1.RacComponent },
    { path: 'complete', component: write_component_1.WriteComponent }
];
//# sourceMappingURL=test-routing.module.js.map