function SeriesModel(id, indicator, data, horizAxis, vertAxis) {
  var self = this;
  self.id = id;
  self.indicator = indicator;
  self.enabled = ko.observable(true);
  self.visible = ko.observable(true);
  self.data = data;
  self.horizAxis = horizAxis;
  self.vertAxis = vertAxis;
  self.teeChartSeries = null;
  self.upperThreshold = ko.observable(null);
  self.lowerThreshold = ko.observable(null);
  self.thresholdEnabled = ko.observable(true);
  self.thresholdLinesAdded = false;
  self.upperThresholdSeries = null;
  self.lowerThresholdSeries = null;
  self.crossingThreshold = ko.observable(false);
}

var Chart1;
var series;
var series2;
var sliderInitialized = false;

var statistics = [
  { label: "Min", val: "min" },
  { label: "Max", val: "max" },
  { label: "Setpoint", val: "setPointData" },
  { label: "Spread", val: "spreadData" },
  { label: "Range", val: "rangeData" },
  { label: "Average", val: "averageData" }
];

function initChart() {
  changeBackgroundToDark();
  dualAxisChart1(profileData.profileData, profileData.profileData.length);
  if (!sliderInitialized) {
    setTimeout(function () {
      setupBootstrapSlider(Chart1);
    }, 100);
  }
}

function changeBackgroundToDark() {
  document.body.style.backgroundColor = "#0C0C0C";
  document.body.style.color = "white";
}

function dualAxisChart1(profiledata, pointParameterCount) {
  var ctx = document.getElementById("chartCanvas");
  ctx.width = ctx.parentElement.clientWidth;
  //ctx.height = ctx.parentElement.clientHeight;
  ctx.height = 300;

  Chart1 = new Tee.Chart(ctx);
  Chart1.title.visible = false;
  Chart1.zoom.enabled = false;
  Chart1.scroll.enabled = false;

  for (var index = 0; index < profiledata.length; index++) {
    var element = profiledata[index];
    console.log("element", element);
  }

  var series;
  if (pointParameterCount >= 1) {
    series = Chart1.addSeries(new Tee.Line());
    series.data.x = profiledata[0].xValues;
    series.data.values = profiledata[0].scalarData;
    series.horizAxis = Chart1.axes.bottom;
    series.vertAxis = Chart1.axes.left;
  }

  console.log("series", series)

  var series2;
  if (pointParameterCount == 2) {
    series2 = Chart1.addSeries(new Tee.Line());
    series2.data.x = profiledata[1].xValues;
    series2.data.values = profiledata[1].scalarData;
    series2.horizAxis = Chart1.axes.top;
    series2.vertAxis = Chart1.axes.right;
  }

  Chart1.axes.left.minorTicks.visible = true;
  Chart1.axes.top.minorTicks.visible = true;
  Chart1.axes.right.minorTicks.visible = true;
  Chart1.axes.bottom.minorTicks.visible = true;

  Chart1.axes.left.innerTicks.visible = true;
  Chart1.axes.top.innerTicks.visible = true;
  Chart1.axes.right.innerTicks.visible = true;
  Chart1.axes.bottom.innerTicks.visible = true;

  Chart1.axes.left.title.text = "Left Axis";
  Chart1.axes.top.title.text = "Top Axis";
  Chart1.legend.visible = false;
  Chart1.axes.left.automatic = true;
  Chart1.axes.right.automatic = true;
  Chart1.draw();
}

function setupBootstrapSlider(chart) {
  if (!chart) {
    console.warn("Chart not initialized yet, will setup slider later");
    return;
  }

  if (sliderInitialized) {
    return;
  }

  try {
    var bounds = calculateSliderBounds(profileData);
    var range = bounds.max - bounds.min;
    var defaultMin = Math.round(bounds.min + range * 0.2);
    var defaultMax = Math.round(bounds.min + range * 0.8);

    var slider = new Slider('#rangeSlider', {
      min: bounds.min,
      max: bounds.max,
      value: [defaultMin, defaultMax],
      step: Math.max(1, Math.floor(range / 100)),
      tooltip_split: true,
      tooltip: 'always',
      range: true
    });

    slider.on('slide', function (values) {
      var min = values[0];
      var max = values[1];

      if (chart.axes) {
        if (chart.axes.bottom) {
          chart.axes.bottom.setMinMax(min, max);
        }

        if (chart.axes.top) {
          chart.axes.top.setMinMax(min, max);
        }

        var element = document.body;
        var viewModelInstance = ko.dataFor(element);
        if (viewModelInstance) {
          viewModelInstance.sliderMinValue(min);
          viewModelInstance.sliderMaxValue(max);
        }
        chart.draw();
      }
    });
    sliderInitialized = true;
  } catch (e) {
    console.error("Error setting up bootstrap slider:", e);
  }
}

function calculateSliderBounds(profileData) {
  if (!profileData || !profileData.profileData || !isArray(profileData.profileData)) {
    return { min: 0, max: 1000 };
  }
  var allXValues = [];
  for (var i = 0; i < profileData.profileData.length; i++) {
    var series = profileData.profileData[i];
    if (series && series.xValues && isArray(series.xValues)) {
      for (var j = 0; j < series.xValues.length; j++) {
        allXValues.push(series.xValues[j]);
      }
    }
  }
  if (allXValues.length === 0) {
    return { min: 0, max: 1000 };
  }
  var min = findMin(allXValues);
  var max = findMax(allXValues);
  return { min: min, max: max };
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function setHoriz(c, value) {
  c.series.items[0].horizAxis = value;
  c.series.items[1].horizAxis = value;
  c.series.items[2].horizAxis = value;
}

function setVert(c, value) {
  c.series.items[0].vertAxis = value;
  c.series.items[1].vertAxis = value;
  c.series.items[2].vertAxis = value;
}

function statisticsComputedData(length) {
  var retArray = [];
  var i = 0;
  while (i < statistics.length) {
    var obj = {};
    if (length === 1) {
      obj['header'] = statistics[i].label;
      obj['series1'] = setDecimalPalaces(profileData.profileData[0][statistics[i].val]);
    } else {
      obj['header'] = statistics[i].label;
      obj['series1'] = setDecimalPalaces(profileData.profileData[0][statistics[i].val]);
      obj['series2'] = setDecimalPalaces(profileData.profileData[1][statistics[i].val]);
    }
    retArray.push(obj);
    i += 1;
  }
  return retArray;
}

function createLegends(profileData) {
  var legends = [];
  for (var i = 1; i <= profileData.length; i++) {

    legends.push({ id: i, name: 'Series' + i });
  }
  return legends;
}

function findMin(array) {
  if (!array || array.length === 0) return 0;
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function findMax(array) {
  if (!array || array.length === 0) return 0;
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

ko.validation.rules.pattern.message = 'Invalid.';
ko.validation.init({
  decorateElement: true,
  registerExtenders: true,
  messagesOnModified: true,
  insertMessages: false,
  parseInputAttributes: true,
  messageTemplate: null,
  errorElementClass: 'error',
  decorateInputElement: true,
  decorateElementOnModified: true, // class to decorate error element
  errorMessageClass: 'validationMessage',
  allowHtmlMessages: false,
}, true);

function viewModel() {
  var self = this;
  // Table Data
  self.statisticsProfileData = ko.observableArray(profileData.profileData);
  self.statisticsComputedData = ko.observable();
  self.seriesCount = ko.observable(profileData.profileData.length);
  var initialBounds = calculateSliderBounds(profileData);
  var range = initialBounds.max - initialBounds.min;
  var initialMin = Math.round(initialBounds.min + range * 0.2);
  var initialMax = Math.round(initialBounds.min + range * 0.8);
  self.sliderMinValue = ko.observable(initialMin);
  self.sliderMaxValue = ko.observable(initialMax);
  self.seriesConfig = ko.observableArray([]);
  self.showZoomSlider = ko.observable(false);
  // y-axis settings
  self.yaxisScaleList = ko.observableArray([{ id: 1, name: 'Auto' }, { id: 2, name: 'Manual' }, { id: 3, name: 'Span' }])
  self.min = ko.observable().extend({
    required: true
  });
  self.max = ko.observable().extend({
    required: true
  });
  self.range = ko.observable().extend({
    required: true
  });
  self.selectedseries = ko.observable();
  self.selectedYaxisScale = ko.observable();
  self.yaxisSettingShow = ko.observable(false);
  self.yaxiFieldsDisabled = ko.observable(false);
  self.yaxisRangeFieldDisabled = ko.observable(false);
  self.errors = ko.validation.group(self);
  self.showRangeErrors = ko.observable(false);
  self.showMinMaxErrors = ko.observable(false);
  self.selectedFreezSeries = ko.observable();
  self.onFreezClick = function (data, event) {
    console.log("freez", data.id);
    console.log("freez", Chart1.series.items[0].data.x);
    console.log("freez", Chart1.series.items[0].data.values);
    self.selectedFreezSeries(data);

    ko.utils.arrayForEach(self.visibleSeries(), function (visibleSeries) {
      console.log("visibleSeries", visibleSeries);
      if (visibleSeries.id === data.id) {
        Chart1.series.items[data.id - 1].format.stroke.fill = 'gray';
        Chart1.series.items[data.id - 1].format.stroke.dash = [3, 3];
      } else {
        Chart1.series.items[visibleSeries.id - 1].format.stroke.fill = '';
        Chart1.series.items[visibleSeries.id - 1].format.stroke.dash = [0, 0]
      }
    });
  }

  self.counter = 0;
  self.generateRandomPoint = function () {
    x = self.counter++;
    y = Number(Math.floor(Math.random() * 125));
    y1 = Math.floor(Math.random() * 400);
    //console.log(x, y);
    var valueArray = [];

    ko.utils.arrayForEach(self.visibleSeries(), function (visibleSeries) {
      console.log();
      // Chart1.series.items[visibleSeries.id - 1].data.values.push(y);
      // Chart1.series.items[visibleSeries.id - 1].data.x.push(x);
      // console.log("Chart1.series.items[visibleSeries.id-1].data", Chart1.series.items[visibleSeries.id - 1].data)
      // Chart1.draw();
    });
    // valueArray = self.chart.series.items[0].data.Chart1.series.items[visibleSeries.id-1].data;
    // console.log(Array.isArray(valueArray));
    // if (Array.isArray(valueArray)) {

    // }
  }

  self.getActiveClass = function (id) {
    console.log("madji88888888888888888888888", self.selectedFreezSeries.id == id)
    return (self.selectedFreezSeries.id == id) ? true : false
  }

  self.canYaxisSave = ko.computed(function () {
    if (self.selectedYaxisScale() && self.selectedYaxisScale().id == 1) {
      return (self.selectedseries() && self.selectedYaxisScale()) ? true : false;
    } else if (self.selectedYaxisScale() && self.selectedYaxisScale().id == 2) {
      return (self.selectedseries() && self.selectedYaxisScale() && self.min() && self.max()) ? true : false;
    } else {
      return (self.selectedseries() && self.selectedYaxisScale() && self.range()) ? true : false;
    }
  });

  self.yaxiSubmit = function () {
    self.errors.showAllMessages();

    console.log(self.selectedYaxisScale().id);
    if (self.selectedYaxisScale().id) {
      if (self.selectedYaxisScale().id == 2) {
        self.updateYaxisChart(self.selectedseries().id - 1, self.min(), self.max(), false);
      } else if (self.selectedYaxisScale().id == 3) {
        self.updateYaxisChart(self.selectedseries().id - 1, self.min(), self.max(), true);
      }
      self.yaxisSettingShow(false);
      self.onExpandIconActive(false);
      self.chartClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
      self.tableClass("");
      if (self.showChart()) {
        resize(Chart1, 1110);
      }
    }
  }

  self.updateYaxisChart = function (yaxisPosition, min, max, range) {
    alert(max)
    if (range) {
      if (yaxisPosition == 0) {
        Chart1.axes.left.automatic = false;
        Chart1.axes.left.minimum = Number(min);
        Chart1.axes.left.maximum = Number(min) + Number(self.range());
      } else {
        Chart1.axes.right.automatic = false;
        Chart1.axes.right.minimum = Number(min);
        Chart1.axes.right.maximum = Number(min) + Number(self.range());
      }
    } else {
      if (yaxisPosition == 0) {
        Chart1.axes.left.automatic = false;
        Chart1.axes.left.minimum = Number(min);
        Chart1.axes.left.maximum = Number(max);
      } else {
        Chart1.axes.right.automatic = false;
        Chart1.axes.right.minimum = Number(min);
        Chart1.axes.right.maximum = Number(max);
      }
    }
    Chart1.draw();
    self.setMinAndMaxYAxis1FromChart();

  }

  self.setMinAndMaxYAxis1FromChart = function () {
    alert("jj")
    if (self.selectedseries().id == 1) {
      var yaxis1 = Chart1.axes['left'];
      self.min(setDecimalPalaces(yaxis1.minimum));
      self.max(setDecimalPalaces(yaxis1.maximum));
    } else {
      var yaxis1 = Chart1.axes['right'];
      self.min(setDecimalPalaces(yaxis1.minimum));
      self.max(setDecimalPalaces(yaxis1.maximum));
    }
  }

  self.setMinAndMaxYAxisFromTable = function () {
    self.min(setDecimalPalaces(profileData.profileData[self.selectedseries().id - 1]['min']))
    self.max(setDecimalPalaces(profileData.profileData[self.selectedseries().id - 1]['max']))
  }

  self.selectedYaxisScaleChange = function (data, event) {
    console.log(data.selectedYaxisScale(), event);
    self.errors.showAllMessages();
    if (data.selectedYaxisScale().id == 2) { // Manual
      self.yaxisRangeFieldDisabled(false);
      self.yaxiFieldsDisabled(true);
      self.setMinAndMaxYAxis1FromChart();
      self.showRangeErrors(false);
      self.showMinMaxErrors(true);
    } else if (data.selectedYaxisScale().id == 1) { // Auto
      self.yaxiFieldsDisabled(false);
      self.yaxisRangeFieldDisabled(false);
      self.setMinAndMaxYAxisFromTable();
      self.showRangeErrors(false);
      self.showMinMaxErrors(false);
    } else { // Range
      self.yaxiFieldsDisabled(false);
      self.yaxisRangeFieldDisabled(true);
      self.setMinAndMaxYAxis1FromChart();
      self.showRangeErrors(true);
      self.showMinMaxErrors(false);
    }
  }

  self.selectedYaxisSeriesChange = function (data, event) {
    self.selectedYaxisScale(self.yaxisScaleList()[0]);
    self.yaxiFieldsDisabled(false);
    self.yaxisRangeFieldDisabled(false);
    self.setMinAndMaxYAxisFromTable();
  }

  self.seriesConfig = ko.observableArray([]);

  if (profileData && profileData.profileData) {
    for (var i = 0; i < profileData.profileData.length; i++) {
      var seriesData = profileData.profileData[i];
      var indicator = String.fromCharCode(65 + i); // 'A', 'B', etc.
      var horizAxis = i === 0 ? "bottom" : "top";
      var vertAxis = i === 0 ? "left" : "right";

      self.seriesConfig.push(new SeriesModel(
        i + 1,
        indicator,
        seriesData,
        horizAxis,
        vertAxis
      ));
    }
  }

  self.statisticsComputedData = ko.computed(function () {
    return statisticsComputedData(profileData.profileData.length);
  });

  self.visibleSeries = ko.observableArray(createLegends(profileData.profileData));

  self.onSeriesClick = function (data, event) {
    self.toggleSeries(data);
    return true;
  };

  self.toggleSeries = function(seriesConfig) {
    ko.isObservable(seriesConfig.enabled)?
      seriesConfig.enabled(false):
      seriesConfig.enabled = false;
    seriesConfig.id == 1 ?
      Chart1.series.items[0].visible=!Chart1.series.items[0].visible
    :
      Chart1.series.items[1].visible=!Chart1.series.items[1].visible
    Chart1.draw();
  };

  self.cancelSeries = function (seriesConfig, event) {
    if (event) {
      event.stopPropagation();
    }
    ko.isObservable(seriesConfig.visible)?
      seriesConfig.visible(false):
      seriesConfig.visible = false;
    try{
      seriesConfig.id == 1? Chart1.removeSeries(Chart1.series.items[0]):Chart1.removeSeries(Chart1.series.items[1]);
      }
    catch(e){
      console.error("Error while deleting the chart",e)
    }finally{
      Chart1.draw();
    }
  };

  self.toggleZoomSlider = function () {
    self.showZoomSlider(!self.showZoomSlider());
    if (self.showZoomSlider()) {
      setTimeout(function () {
        if (!sliderInitialized && Chart1) {
          setupBootstrapSlider(Chart1);
        }
      }, 100);
    }
  };

  self.updateChart = function () {
    dualAxisChart1(profileData.profileData, profileData.profileData.length, true);
  };

  // chart show/hide
  self.showChart = ko.observable(true); // Set to true by default

  // Profile Series Selection
  self.selectedSever = ko.observable();
  self.selectedScanner = ko.observable();
  self.selectedType = ko.observable();
  self.selectedMeasurements = ko.observable();
  self.selectedMode = ko.observable();
  self.pointParamaterExceedMessage = ko.observable();
  self.scannerList = ko.observableArray(controlList || []);
  self.measurementsList = ko.observableArray(measurements || []);
  self.typesList = ko.observableArray(types || []);
  self.modesList = ko.observableArray(modes || []);
  self.seriesPlotSelectionList = ko.observableArray();

  self.seversList = ko.computed(function () {
    if (!severList) return [];

    var severs = [];
    for (var index = 0; index < severList.length; index++) {
      var element = severList[index];
      var item = {
        id: element.lineId,
        name: element.lineName + " | " + element.serverName
      };
      severs.push(item);
    }
    return severs;
  });

  self.onFormSubmit = function (formElement) {
    self.seriesPlotSelectionList.push("hello");
    console.log("seriesPlotSelectionList", self.seriesPlotSelectionList().length);
    if (self.seriesPlotSelectionList().length > 0) {
      self.reset();
      self.showChart(true);
    } else {
      self.showChart(false);
    }
    if (self.seriesPlotSelectionList().length == 2) {
      self.pointParamaterExceedMessage("Max series limit reached.");
    }
    dualAxisChart1(profileData.profileData, self.seriesPlotSelectionList().length);
  };

  self.canSave = ko.computed(function () {
    return (self.selectedSever() && self.selectedScanner() && self.selectedMeasurements() && self.selectedType() && self.selectedMode()) ? true : false;
  });

  self.reset = function () {
    self.selectedSever(null);
    self.selectedScanner(null);
    self.selectedMeasurements(null);
    self.selectedType(null);
    self.selectedMode(null);
  };

  self.updateData = function () {
    var newDat = [90, 50, 80, 70, 60];
    updateChart(newDat);
  };

  self.onSettingIconActive = ko.observable(false);
  self.onSettingShow = ko.observable(false);
  self.onTableIconActive = ko.observable(true);
  self.onTableShow = ko.observable(true);
  self.onExpandIconActive = ko.observable(false);
  self.isExpanded = ko.observable(false);

  self.chartClass = ko.observable("col-lg-9 col-md-9 col-sm-9 col-xs-9");
  self.tableClass = ko.observable("col-lg-3 col-md-3 col-sm-3 col-xs-3");

  self.onSettingIconClick = function () {
    self.onSettingShow(!self.onSettingShow());
    self.onTableShow(false);
    self.yaxisSettingShow(false);
    self.onSettingIconActive(!self.onSettingIconActive());
    self.onTableIconActive(false);
    self.onExpandIconActive(false);
    if (self.onSettingIconActive()) {
      self.chartClass("col-lg-9 col-md-9 col-sm-9 col-xs-9");
      self.tableClass("col-lg-3 col-md-3 col-sm-3 col-xs-3");
      console.log("self.showChart", self.showChart());
      if (self.showChart()) {
        resize(Chart1, 800);
      }
    } else {
      self.chartClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
      self.tableClass("");
      if (self.showChart()) {
        resize(Chart1, 1110);
      }
    }
  };

  self.onTableIconClick = function () {
    self.onTableShow(!self.onTableShow());
    self.onTableIconActive(!self.onTableIconActive());
    self.onSettingShow(false);
    self.yaxisSettingShow(false);
    self.onExpandIconActive(false);
    if (self.onTableIconActive()) {
      self.chartClass("col-lg-9 col-md-9 col-sm-9 col-xs-9");
      self.tableClass("col-lg-3 col-md-3 col-sm-3 col-xs-3");
      if (self.showChart()) {
        resize(Chart1, 800);
      }
    } else {
      self.chartClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
      self.tableClass("");
      if (self.showChart()) {
        resize(Chart1, 1110);
      }
    }
  };

  self.onExpandIonClick = function () {
    self.onExpandIconActive(!self.onExpandIconActive());
    self.yaxisSettingShow(true);
    self.onSettingShow(false);
    self.onTableShow(false);
    self.onTableIconActive(false);
    console.log("Madhu999999999999", self.onExpandIconActive());


    if (self.onExpandIconActive()) {
      self.chartClass("col-lg-9 col-md-9 col-sm-9 col-xs-9");
      self.tableClass("col-lg-3 col-md-3 col-sm-3 col-xs-3");
      if (self.showChart()) {
        resize(Chart1, 800);
      }
    } else {
      self.chartClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
      self.tableClass("");
      if (self.showChart()) {
        resize(Chart1, 1110);
      }
    }

    if (self.selectedseries().id == 1) {
      self.min(setDecimalPalaces(profileData.profileData[self.selectedseries().id - 1]['min']))
      self.max(setDecimalPalaces(profileData.profileData[self.selectedseries().id - 1]['max']))
    }

    if (self.selectedYaxisScale().id == 2) { // Manual
      self.yaxisRangeFieldDisabled(false);
      self.yaxiFieldsDisabled(true);
      self.setMinAndMaxYAxis1FromChart();
    } else if (self.selectedYaxisScale().id == 1) { // Auto
      self.yaxiFieldsDisabled(false);
      self.yaxisRangeFieldDisabled(false);
      self.setMinAndMaxYAxisFromTable();
    } else { // Range
      self.yaxiFieldsDisabled(false);
      self.yaxisRangeFieldDisabled(true);
      self.setMinAndMaxYAxis1FromChart();
    }
  };

  // self.yaxiFieldsDisabled = ko.computed(function () {
  //   if (self.yaxisSettingShow()) {
  //     console.log(self.selectedYaxisScale())
  //     var disabled = false;
  //     if (self.selectedYaxisScale().id == 1) {
  //       disabled = true;
  //     }
  //     return disabled;
  //   }
  // });

  self.toggleExpand = function () {
    self.isExpanded(!self.isExpanded());
    setTimeout(function () {
      var ctx = document.getElementById("chartCanvas");
      var container = ctx.parentElement;
      ctx.width = container.clientWidth;
      ctx.height = container.clientHeight;
      self.updateChart();
    }, 100);
  };

  self.resizeGrid = function () {
    alert("Grid resized!");
  };

  self.sliderMinValue.subscribe(function (newValue) {
    if (Chart1) {
      if (Chart1.axes.bottom) {
        Chart1.axes.bottom.setMinMax(newValue, self.sliderMaxValue());
      }
      if (Chart1.axes.top) {
        Chart1.axes.top.setMinMax(newValue, self.sliderMaxValue());
      }
      Chart1.draw();
    }
  });

  self.sliderMaxValue.subscribe(function (newValue) {
    if (Chart1) {
      if (Chart1.axes.bottom) {
        Chart1.axes.bottom.setMinMax(self.sliderMinValue(), newValue);
      }
      if (Chart1.axes.top) {
        Chart1.axes.top.setMinMax(self.sliderMinValue(), newValue);
      }
            Chart1.draw();
    }
  });

  setTimeout(function () {
    self.showChart(true);
   self.updateChart();
  }, 200);

  self.intervalId = setInterval(self.generateRandomPoint, 1000);

  if (self.counter == 2000) {
    clearInterval(self.intervalId);
  }
}

function setDecimalPalaces(num) {
  return num % 1 === 0 ? num : num.toFixed(3);
}

window.onload = function () {
  try {
    initChart();
    ko.applyBindings(new viewModel());
  } catch (e) {
    console.error("Error during initialization:", e);
  }
};