webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CoronaApp.js":
/*!*********************************!*\
  !*** ./components/CoronaApp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
/* harmony import */ var _utils_useYday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useYday */ "./utils/useYday.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_CaseChart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_cns_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/cns.js */ "./assets/cns.js");













console.log(); // const calcDiff = current => prev => current !== 0 ? ((current - prev) / 100) * 100 : 0
//
// const CoronaApp = ({ isHeb, theme, userLocation, yesterdayC, yesterdayGlobal, worldTime }) => {
//
//   const [showWorld, setShowWorld] = useState(true)
//   const [country, setCountry] = useState(userLocation)
//   const [inputValue, setInput] = useState('')
//
//   const url = 'https://nCorona.live/api/v1/'
//   const url2 = 'https://corona.lmao.ninja/countries/'
//   const worldUrl = 'https://corona.lmao.ninja/all'
//   const v2 = 'https://corona.lmao.ninja/v2/countries/'
//   const { countryStats } = useTime(country, theme)
//   const { todayStats } = useTodayStats(url, country)
//   const worldToday = useTodayStats(url, 'world').todayStats
//   const { yesterdayCn } = useYday(v2, country)
//
//   const { countries } = useCountries()
//
//
//   const worldTodaySorted = worldToday &&
//     {
//       cases: worldToday.cases,
//       active: worldToday.active,
//       recovered: worldToday.recovered,
//       deaths: worldToday.deaths,
//       todayCases: worldToday.todayCases,
//       affectedCountries: yesterdayGlobal.affectedCountries
//     } || ''
//
//   const yesterdayStatsSorted = yesterdayCn && {
//     cases: yesterdayCn.cases,
//     todayCases: yesterdayCn.todayCases,
//     recovered: yesterdayCn.recovered,
//     deaths: yesterdayCn.deaths,
//   } || ''
//
//   const yesterdayGlobalSorted = yesterdayGlobal && {
//     cases: yesterdayGlobal.cases,
//     active: yesterdayGlobal.active,
//     deaths: yesterdayGlobal.deaths,
//     todayCases: yesterdayGlobal.todayCases,
//     recovered: yesterdayGlobal.recovered,
//     affectedCountries: yesterdayGlobal.affectedCountries
//   } || ''
//
//   const todayStatsSorted = todayStats && 
//     {
//       cases: todayStats.cases,
//       todayCases: todayStats.todayCases,
//       recovered: todayStats.recovered,
//       deaths: todayStats.deaths,
//     } || ''
//
//   const handleChange = selected => {
//     setCountry(selected.value)
//   }
//   const handleSubmit = e => {
//     e.preventDefault();
//     setCountry(inputValue)
//   }
//
//   // const selectOptions = countries && countries.map(a => ({ value: a, label: a }))
//   const selectOptions = countries &&
//     countries
//     .map((country, idx) => ({
//       value: country,
//       label: cns[idx]
//     }))
//
//   return (
//     <div>
//     {#<{(|
//       <HeaderDescription />
//       |)}>#}
//
//       <Container>
//
//       <form 
//         style={{ maxWidth: '520px', margin: '54px auto 12px', textAlign: 'center'}}
//         onSubmit={handleSubmit}>
//         <label style={{fontSize: '16px', fontWeight: 'bold'}}>
//           { isHeb ? `נתונים לפי מדינה` : `Data For Country:` }
//         </label>
//
//
//         <Select
//           className={'Select'}
//           options={selectOptions}
//           value={country === 'Israel' && isHeb ? 'ישראל' : country}
//           onChange={handleChange}
//           placeholder={country || 'ישראל'}
//         />
//       </form>
//
//     <Stats
//       cn={country || todayStats && todayStats.country}
//       todayStats={todayStatsSorted}
//       yesteryday={yesterdayStatsSorted}
//       isHeb={isHeb}
//     />
//
//     {#<{(|
//       <iframe 
//         style={{  width: "100%", height:"420px" }}
//         src="https://coronavirus.app/map?embed=true" 
//         frameborder="0" 
//         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//       />
//     |)}>#}
//       {
//         countryStats &&
//           (
//               <Chart
//                 isHeb={isHeb}
//                 type='line'
//                 labels={countryStats.labels}
//                 // data={countryStats.datasets.filter(a => a.label === 'cases')}
//                 data={countryStats.datasets}
//                 label={country || 'israel'}
//                 fill={false}
//                 stops={3}
//                 showLegend={false}
//               />
//           )
//       }
//
//       <Stats
//         cn={'World'}
//         todayWorld={worldTodaySorted}
//         yesteryday={yesterdayGlobalSorted}
//         isHeb={isHeb}
//       />
//
//       <HeaderDescription 
//         txt='* גרפים המציגים את שיעור הצמיחה של נגיף הקורונה,
//         אינם מתעדכנים בזמן אמת ולכן אינם משקפים את היום הנוכחי. בדרך-כלל מתקיים פער של יום,
//         לכל היותר שלושה ימים. הנתונים המוצגים מחוץ לגרפים משקפים את הזמן הנתון ברגע הנוכחי ומתעדכנים בערך אחת לחצי שעה.'
//       />
//
//     <Chart
//       isHeb={isHeb}
//       type='line'
//       labels={worldTime.labels}
//       data={worldTime.datasets}
//       label={isHeb && 'עולם' || 'World'}
//       fill={false}
//       stops={3}
//       showLegend={true}
//     />
//
//     </Container>
//
//     </div>
//   )
// }

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(CoronaApp));

/***/ })

})
//# sourceMappingURL=index.js.0acd88943fa80f4fe4e7.hot-update.js.map