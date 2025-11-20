const colorList = [

  {
    type: 'text', value: [
      {
        category: 'primary',
        color: [
          { colorName: "primary-01", txt: 'blue/900', var : 'sc-blue-900'},
          { colorName: "primary-02", txt: 'blue/800', var : 'sc-blue-800'},
          { colorName: "primary-03", txt: 'blue/700', var : 'sc-blue-700'},
          { colorName: "primary-04", txt: 'blue/500', var : 'sc-blue-500'},
        ]
      },
      {
        category: 'basic',
        color: [
          { colorName: "basic-01", txt: 'base/black' , var : 'black'    },
          { colorName: "basic-02", txt: 'neutral/900' ,var : 'sc-neutral-900'    },
          { colorName: "basic-03", txt: 'neutral/800' ,var : 'sc-neutral-800'    },
          { colorName: "basic-04", txt: 'neutral/700' ,var : 'sc-neutral-700'    },
          { colorName: "basic-05", txt: 'neutral/500' ,var : 'sc-neutral-500'    },
          { colorName: "basic-06", txt: 'base/white' , var : 'white'    },
        ]
      },
      {
        category: 'state',
        color: [
          { colorName: "positive", txt: 'element/positive' , var : 'sc-green-400'},
          { colorName: "informative", txt: 'element/informative' , var : 'sc-blue-500'},
          { colorName: "warning", txt: 'element/warning' , var : 'sc-yellow-500'},
          { colorName: "danger", txt: 'element/danger' , var : 'sc-red-400'},
          { colorName: "disabled-01", txt: 'element/disabled-01' , var : 'sc-neutral-100'},
          { colorName: "disabled-02", txt: 'element/disabled-02' , var : 'sc-neutral-200'},
          { colorName: "disabled-03", txt: 'element/disabled-03' , var : 'sc-neutral-300'},
          { colorName: "disabled-04", txt: 'element/disabled-04' , var : 'sc-blue-300'},
          { colorName: "readonly", txt: 'element/readonly' , var : 'sc-neutral-200'},
        ]
      },
      {
        category: 'interactive',
        color: [
          { colorName: "primary", txt: 'primary/500' , var : 'sc-blue-500'},
          { colorName: "primary-hovered", txt: 'primary/700' , var : 'sc-blue-700'},
          { colorName: "primary-pressed", txt: 'primary/800' , var : 'sc-blue-800'},
          { colorName: "primary-disabled", txt: 'musted blue/50' , var : 'sc-musted-blue-50'},
          { colorName: "secondary", txt: 'secondary/300' , var : 'sc-green-300'},
          { colorName: "secondary-hovered", txt: 'secondary/400' , var : 'sc-green-400'},
          { colorName: "secondary-pressed", txt: 'secondary/500' , var : 'sc-green-500'},
          { colorName: "secondary-disabled", txt: 'secondary/100' , var : 'sc-green-100'},
          { colorName: "selected", txt: 'primary/600' , var : 'sc-blue-600'},
          { colorName: "danger", txt: 'red/400' , var : 'sc-red-400'},
          { colorName: "danger-hover", txt: 'red/600' , var : 'sc-red-500'},
          { colorName: "danger-pressed", txt: 'red/600' , var : 'sc-red-600'},
          { colorName: "inverse", txt: 'base/white' , var : 'white'},
        ]
      },
    ]
  },
  {
    type: 'background', value: [
      {
        category: 'primary',
        color: [
          { colorName: "primary-01", txt: 'blue/500', var : 'sc-blue-500'},
          { colorName: "primary-02", txt: 'blue/300', var : 'sc-blue-300'},
          { colorName: "primary-03", txt: 'blue/100', var : 'sc-blue-100'},
        ]
      },
      {
        category: 'basic',
        color: [
          { colorName: "background-01", txt: 'neutral/200' , var : 'sc-neutral-200'},
          { colorName: "background-02", txt: 'neutral/100' ,var : 'sc-neutral-100'},
          { colorName: "background-03", txt: 'base/white' ,var : 'white'},
        ]
      },
      {
        category: 'state',
        color: [
          { colorName: "disabled-01", txt: 'element/disabled-01' , var : 'sc-neutral-100'},
          { colorName: "disabled-02", txt: 'element/disabled-02' , var : 'sc-neutral-200'},
          { colorName: "disabled-03", txt: 'element/disabled-03' , var : 'sc-neutral-300'},
          { colorName: "disabled-04", txt: 'element/disabled-04' , var : 'sc-blue-300'},
          { colorName: "readonly", txt: 'element/readonly' , var : 'sc-neutral-200'},
        ]
      },
      {
        category: 'interactive',
        color: [
          { colorName: "primary", txt: 'primary/500' , var : 'sc-blue-500'},
          { colorName: "primary-hovered", txt: 'extra/50' , var : 'sc-extra-50'},
          { colorName: "primary-pressed", txt: 'primary/700' , var : 'sc-blue-700'},
          { colorName: "primary-disabled", txt: 'blue/200' , var : 'sc-blue-200'},
          { colorName: "secondary", txt: 'secondary/300' , var : 'sc-green-300'},
          { colorName: "secondary-hovered", txt: 'secondary/400' , var : 'sc-green-400'},
          { colorName: "secondary-pressed", txt: 'secondary/500' , var : 'sc-green-500'},
          { colorName: "secondary-disabled", txt: 'secondary/50' , var : 'sc-green-50'},
          { colorName: "teritary", txt: 'neutral/900' , var : 'sc-neutral-900'},
          { colorName: "teritary-hover", txt: 'neutral/800' , var : 'sc-neutral-800'},
          { colorName: "teritary-pressed", txt: 'neutral/700' , var : 'sc-neutral-700'},
          { colorName: "extra", txt: 'brand/primary/50' , var : 'sc-blue-50'},
          { colorName: "extra-hover", txt: 'brand/primary/100' , var : 'sc-blue-100'},
          { colorName: "extra-pressed", txt: 'brand/primary/200' , var : 'sc-blue-200'},
          { colorName: "basic-disabled", txt: 'bg/state/disabled-02' , var : 'sc-neutral-200'},
          { colorName: "danger", txt: 'red/400' , var : 'sc-red-400'},
          { colorName: "danger-hover", txt: 'red/600' , var : 'sc-red-500'},
          { colorName: "danger-pressed", txt: 'red/600' , var : 'sc-red-600'},
        ]
      },
    ]
  },
  {
    type: 'icon', value: [
      {
        category: 'primary',
        color: [
          { colorName: "primary-01", txt: 'blue/800', var : 'sc-blue-800'},
          { colorName: "primary-02", txt: 'blue/700', var : 'sc-blue-700'},
          { colorName: "primary-03", txt: 'blue/500', var : 'sc-blue-500'},
          { colorName: "primary-04", txt: 'blue/300', var : 'sc-blue-300'},
        ]
      },
      {
        category: 'secondary',
        color: [
          { colorName: "secondary-01", txt: 'green/400', var : 'sc-green-400'},
          { colorName: "secondary-02", txt: 'green/300', var : 'sc-green-300'},
        ]
      },
      {
        category: 'basic',
        color: [
          { colorName: "basic-01", txt: 'base/black' , var : 'black'},
          { colorName: "basic-02", txt: 'neutral/900' ,var : 'sc-neutral-900'},
          { colorName: "basic-03", txt: 'neutral/700' ,var : 'sc-neutral-700'},
          { colorName: "basic-04", txt: 'base/white' ,var : 'white'},
        ]
      },
      {
        category: 'state',
        color: [
          { colorName: "positive", txt: 'element/positive' , var : 'sc-green-400'},
          { colorName: "danger", txt: 'element/danger' , var : 'sc-red-400'},
          { colorName: "disabled", txt: 'neutral/700' , var : 'sc-neutral-700'},
        ]
      },
      {
        category: 'interactive',
        color: [
          { colorName: "primary", txt: 'primary/500' , var : 'sc-blue-500'},
          { colorName: "primary-hovered", txt: 'primary/700' , var : 'sc-blue-700'},
          { colorName: "primary-pressed", txt: 'primary/800' , var : 'sc-blue-800'},
          { colorName: "primary-disabled", txt: 'musted blue/50' , var : 'sc-musted-blue-50'},
          { colorName: "secondary", txt: 'secondary/300' , var : 'sc-green-300'},
          { colorName: "secondary-hovered", txt: 'secondary/400' , var : 'sc-green-400'},
          { colorName: "secondary-pressed", txt: 'secondary/500' , var : 'sc-green-500'},
          { colorName: "secondary-disabled", txt: 'secondary/50' , var : 'sc-green-50'},
          { colorName: "danger", txt: 'red/400' , var : 'sc-red-400'},
          { colorName: "danger-hover", txt: 'red/600' , var : 'sc-red-500'},
          { colorName: "danger-pressed", txt: 'red/600' , var : 'sc-red-600'},
        ]
      },
    ]
  },
  {
    type: 'border', value: [
      {
        category: 'primary',
        color: [
          { colorName: "primary-01", txt: 'blue/800', var : 'sc-blue-800'},
          { colorName: "primary-02", txt: 'blue/500', var : 'sc-blue-500'},
        ]
      },
      {
        category: 'basic',
        color: [
          { colorName: "basic-01", txt: 'neutral/600' ,var : 'sc-neutral-600'},
          { colorName: "basic-02", txt: 'neutral/500' ,var : 'sc-neutral-500'},
          { colorName: "basic-03", txt: 'neutral/400' ,var : 'sc-neutral-400'},
          { colorName: "basic-04", txt: 'neutral/300' ,var : 'sc-neutral-300'},
          { colorName: "basic-05", txt: 'neutral/200' ,var : 'sc-neutral-200'},
        ]
      },
      {
        category: 'state',
        color: [
          { colorName: "positive", txt: 'element/positive' , var : 'sc-green-400'},
          { colorName: "informative", txt: 'element/informative' , var : 'sc-blue-500'},
          { colorName: "warning", txt: 'element/warning' , var : 'sc-yellow-500'},
          { colorName: "danger", txt: 'element/danger' , var : 'sc-red-400'},
          { colorName: "disabled-01" , txt: 'element/disabled-01' , var : 'sc-neutral-100'},
          { colorName: "disabled-02" , txt: 'element/disabled-02' , var : 'sc-neutral-200'},
          { colorName: "disabled-03" , txt: 'element/disabled-03' , var : 'sc-neutral-300'},
          { colorName: "disabled-04" , txt: 'element/disabled-04' , var : 'sc-blue-300'},
          { colorName: "readonly" , txt: 'element/readonly' , var : 'sc-neutral-200'},
        ]
      },
      {
        category: 'interactive',
        color: [
          { colorName: "primary", txt: 'primary/400' , var : 'sc-blue-400'},
          { colorName: "primary-hovered", txt: 'primary/700' , var :    'sc-blue-700'},
          { colorName: "primary-pressed", txt: 'primary/800' , var : 'sc-blue-800'},
          { colorName: "primary-disabled", txt: 'primary/200' , var : 'sc-blue-200'},
          { colorName: "secondary", txt: 'secondary/300' , var : 'sc-green-300'},
          { colorName: "secondary-hovered", txt: 'secondary/400' , var : 'sc-green-400'},
          { colorName: "secondary-pressed", txt: 'secondary/500' , var : 'sc-green-500'},
          { colorName: "secondary-disabled", txt: 'secondary/100' , var : 'sc-green-100'},
          { colorName: "selected", txt: 'primary/600' , var : 'sc-blue-600'},
          { colorName: "danger", txt: 'red/400' , var : 'sc-red-400'},
          { colorName: "danger-hover", txt: 'red/600' , var : 'sc-red-500'},
          { colorName: "danger-pressed", txt: 'red/600' , var : 'sc-red-600'},
        ]
      },
    ]
  },
  {
    type: 'border', value: [
      {
        category: 'primary',
        color: [
          { colorName: "positive-01", txt: 'element/positive', var : 'sc-green-400'},
          { colorName: "positive-02", txt: 'state/bg/positive', var : 'sc-green-50'},
          { colorName: "positive-03", txt: 'extra/100', var : 'sc-extra-100'},
          { colorName: "informative-01", txt: 'element/informative', var : 'sc-blue-500'},
          { colorName: "informative-02", txt: 'state/bg/informative', var : 'sc-blue-50'},
          { colorName: "warning-01", txt: 'element/warning', var : 'sc-yellow-500'},
          { colorName: "warning-02", txt: 'state/bg/warning', var : 'sc-yellow-50'},
          { colorName: "warning-03", txt: 'yellow/300', var : 'sc-yellow-300'},
          { colorName: "danger-01", txt: 'element/danger', var : 'sc-red-400'},
          { colorName: "danger-02", txt: 'state/bg/danger', var : 'sc-red-50'},
        ]
      },
    ]
  },
  {
    type: 'effect', value: [
      {
        category: 'shadow',
        color: [
          { colorName: "cast-01", txt: 'transparent/8', var : 'sc-transparent-8'},
          { colorName: "cast-02", txt: 'transparent/12', var : 'sc-transparent-12'},
          { colorName: "cast-03", txt: 'transparent/16', var : 'sc-transparent-16'},
          { colorName: "cast-04", txt: 'transparent/24', var : 'sc-transparent-24'},
        ]
      },
    ]
  },
];


export {colorList};