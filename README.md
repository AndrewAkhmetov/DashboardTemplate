## Create app
```
npm create vite@latest <project_name> -- --template react-ts
```
```
cd <project_name>
```
```
npm install
```

## Install necessary packages
```
npm install axios react-router-dom jwt-decode
```
```
npm install @heroicons/react
```

## Install tailwind (v4.0)
```
npm install tailwindcss @tailwindcss/vite
```
- Add ```import tailwindcss from '@tailwindcss/vite'``` to ```vite.config.ts``` to ```plugins```
- Add ```@import "tailwindcss";``` to ```src.index.css```

# Install daisyUI (v5.0.2)
```
npm install daisyui@latest
```
- Add ```@plugin "daisyui";``` to ```src.index.css```

# Install ApexCharts
```
npm install --save react-apexcharts apexcharts
```

# Install React D3 Tree
```
npm i --save react-d3-tree
```

# Install mui/material
```
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## Remove unecessary files
- Delete everything in ```src.App.tsx```
- Delete ```src.App.css```
- Delete react.svg from ```src.assets```
- Add ```src.pages```
- Add ```src.components```
- Add ```src.constants.ts```
- Add ```src.api.ts```
- Add ```project_name..env```

