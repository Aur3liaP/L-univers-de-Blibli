import "../styles/Calcifer.css";

function Calcifer() {
  return (
    <div className="calcifer">
      <svg id="calcifer" viewBox="0 0 218 290">
        <defs>
          <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                values="0.01;0.02;0.01;"
                dur="10s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <g id="flames" transform="scale(0.9)">
          <path
            d="M109 290c145 0 103-64.919 103-145 0-53.388-34.333-101.72-103-145C40.333 43.28 6 91.612 6 145c0 80.081-42 145 103 145Z"
            fill="red"
            filter="url(#displacementFilter)"
          />
          <path
            d="M109.5 290C230 290 193 238.96 193 176S155.616 62 109.5 62 26 113.04 26 176s-37 114 83.5 114Z"
            fill="#FF6B00"
            filter="url(#displacementFilter)"
          />
          <path
            id="embers"
            transform="scale(1 0.8) translate(10 110)"
            d="M17.961 270.952c6.858 0 7.266-2.042 23.704-4.952 8.657-1.533 11.13-11.869 16.696-8.902h2.982c11.65 6.212 45.235 14.896 58.438 12.08 6.595-1.406 12.404-6.13 19.081-6.993 6.736-.87 13.49 1.907 20.275 1.907 6.784 0 13.572-3.028 20.274-1.907 3.976.665 4.03 6.994 12.523 6.994 5.963 0 7.916-.537 12.97 1.773 5.052 2.309 2.196 4.945 1.341 5.856-2.2 2.346-5.316 3.707-8.348 4.451-22.11 5.426-32.285 11.592-54.86 13.988-21.56 2.288-55.284 1.137-76.924 0-16.47-.866-50.239-13.85-53.667-17.167-3.43-3.317-1.342-7.128 5.515-7.128Z"
            fill="#000"
          />
          <path
            d="M109.5 290c102.5 0 63.5-39.623 63.5-88.5S144.57 113 109.5 113 46 152.623 46 201.5 7 290 109.5 290Z"
            fill="#FFAB00"
            filter="url(#displacementFilter)"
          />
        </g>
        <g id="face" transform="translate(3 -25)">
          <path
            d="M37.51 243.629c7.093 5.874 11.658 6.64 19.712 5.871 16.197-1.546 17.434-41.756-8.406-37.27-13.025 2.26-23.364 21.41-11.306 31.399Z"
            stroke="#000"
            fill="#FFF"
          />
          <path
            d="M168.554 243.629c-7.093 5.874-11.658 6.64-19.712 5.871-16.196-1.546-17.434-41.756 8.407-37.27 13.024 2.26 23.363 21.41 11.305 31.399Z"
            stroke="#000"
            fill="#FFF"
          />
          <path
            d="M107.25 269.125c-14.125 1.08-22.044-.516-37.695-10.23-6.276-3.895-3.714-12.736 6.195-10.145 23.136 6.05 38.513 2.21 50-3 9.523-4.319 11.88 4.155 9.693 7.963-2.318 4.037-14.068 14.332-28.193 15.412Z"
            fill="#A80000"
          />
          <path
            d="M101.17 269.417c-9.385 0-17.859-2.306-25.42-6.917 3.042-3.625 10.98-5.604 23.813-5.938 12.833-.333 21.145 1.917 24.937 6.75-6.167 4.07-13.943 6.105-23.33 6.105Z"
            fill="#C94400"
          />
          <g id="pupiles" transform="scale(1 1)" transformOrigin="0 230">
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1 1;1 0.2;1 1"
              begin="calcifer.click"
              dur="0.2s"
              repeatCount="1"
            />
            <path
              d="M54.502 234.328c1.773 1.507 4.531 1.86 6.435 1.172 4.048-1.462 2.851-10.373-3.609-9.223-3.256.58-5.84 5.49-2.826 8.051Z"
              fill="#000"
            />
            <path
              d="M150.943 234.328c-1.773 1.507-4.531 1.86-6.436 1.172-4.047-1.462-2.85-10.373 3.61-9.223 3.256.58 5.84 5.49 2.826 8.051Z"
              fill="#000"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Calcifer;
