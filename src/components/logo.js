import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

export const Logo = styled((props) => {
  const { variant, height, width, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 750.47 739.65"
      width={width || 200}
      height={height || 200}
    >
      <defs>
        <linearGradient
          id="bc1e8e34-ee38-4cfb-bb45-de21dc351552"
          x1={327.48}
          x2={459.44}
          y1={-22.99}
          y2={596.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fc00ff" />
          <stop offset={1} stopColor="#00dbde" />
        </linearGradient>
        <linearGradient
          xlinkHref="#bc1e8e34-ee38-4cfb-bb45-de21dc351552"
          id="ab1951ab-b76b-4254-b661-1c89e0212578"
          x1={264.59}
          x2={396.55}
          y1={-9.56}
          y2={609.93}
        />
        <linearGradient
          id="ff857098-8466-4fba-9cda-300f3a1bdcd7"
          x1={482.68}
          x2={482.81}
          y1={383.48}
          y2={384.08}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#00f8ff" />
          <stop offset={1} stopColor="#da00b6" />
        </linearGradient>
        <linearGradient
          id="b7c841e4-f2c3-4f56-b703-aa8e14002b4e"
          x1={493.43}
          x2={469.2}
          y1={387.45}
          y2={442.78}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#090b41" />
          <stop offset={1} stopColor="#3aa9e6" />
        </linearGradient>
        <linearGradient
          id="af61b194-1557-4784-934f-d83b83ac1dc2"
          x1={510.25}
          x2={496.27}
          y1={312.9}
          y2={372.69}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#6a7fec" />
          <stop offset={1} stopColor="#090b41" />
        </linearGradient>
        <linearGradient
          id="b8f5d167-1152-4821-919e-33f1ce4f96f5"
          x1={232.17}
          x2={290.71}
          y1={415.09}
          y2={376.37}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#598eea" />
          <stop offset={0.81} stopColor="#090b41" />
        </linearGradient>
        <linearGradient
          xlinkHref="#ff857098-8466-4fba-9cda-300f3a1bdcd7"
          id="baab9329-9272-4756-a615-9148b759e2c5"
          x1={298.28}
          x2={298.45}
          y1={385.19}
          y2={385.98}
        />
        <linearGradient
          id="bfc6471c-1b80-4fcf-b125-88d252764d69"
          x1={297.05}
          x2={348.25}
          y1={376.17}
          y2={356.93}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#090b41" />
          <stop offset={1} stopColor="#6583eb" />
        </linearGradient>
        <style>{".af8f8041-3ed3-44b4-82fd-db6f205150a7{fill:#e6e7e8}"}</style>
      </defs>
      <g id="b0bf0499-8969-4c7f-9554-4868657ed2ee" data-name="Capa 2">
        <g id="e6a255bb-91b2-405e-bd07-8d3ebcbdc478" data-name="Layer 1">
          <path
            d="M6.9 698.25a23.27 23.27 0 0 1 17.21-6.9c9 0 16.68 4.42 20.76 11.66l-4.21 1.67a19.12 19.12 0 0 0-16.55-9 18.71 18.71 0 0 0-13.93 5.69 19.31 19.31 0 0 0-5.56 14.03 19.55 19.55 0 0 0 5.56 14.13 18.89 18.89 0 0 0 13.93 5.63 19.12 19.12 0 0 0 16.55-9l4.21 1.67a23.69 23.69 0 0 1-20.76 11.66A23.58 23.58 0 0 1 0 715.4a23 23 0 0 1 6.9-17.15ZM109 692a14.16 14.16 0 0 1 10.42 4 13.27 13.27 0 0 1 4.22 10 13.85 13.85 0 0 1-10.25 13.53l11.92 19.29h-5l-11.61-18.66H92.43v18.68H88V692Zm-16.54 4.15V716H109a10 10 0 0 0 7.23-2.81 9.62 9.62 0 0 0 2.88-7.17 9.41 9.41 0 0 0-2.94-7 9.67 9.67 0 0 0-7.17-2.88ZM200.39 692v4.15h-28.93V713h25.59v4.15h-25.59v17.55h29.27v4.15H167V692ZM262.68 691.96h-3.48l-20.83 46.88h4.69l17.88-40.45 17.88 40.45h4.69l-20.83-46.88zM345.39 692a14.13 14.13 0 0 1 10.45 4 13.24 13.24 0 0 1 4.22 10 13.84 13.84 0 0 1-10.24 13.53l11.92 19.29h-5l-11.65-18.68h-16.24v18.68h-4.42V692Zm-16.54 4.15V716h16.54a10 10 0 0 0 7.24-2.81 9.66 9.66 0 0 0 2.88-7.17 9.42 9.42 0 0 0-2.95-7 9.64 9.64 0 0 0-7.17-2.88ZM436.82 692v4.15h-28.94V713h25.59v4.15h-25.59v17.55h29.27v4.15h-33.69V692ZM513.57 694.9a22.43 22.43 0 0 1 9 10.05l-11.92 4.35a11.72 11.72 0 0 0-10.79-6.43 11.44 11.44 0 0 0-8.57 3.62 12.17 12.17 0 0 0-3.42 8.84 12.61 12.61 0 0 0 3.42 9 12.21 12.21 0 0 0 19.36-2.88l11.92 4.42a22.36 22.36 0 0 1-9 10 25.58 25.58 0 0 1-13.73 3.76 24.42 24.42 0 0 1-17.68-7 24.58 24.58 0 0 1 0-34.56 24.41 24.41 0 0 1 17.68-7 25.88 25.88 0 0 1 13.73 3.83ZM571.91 692v35.63h21.7v11.25h-34V692ZM659.52 692h12.25v27.73a18.87 18.87 0 0 1-6 14.2 22.52 22.52 0 0 1-30.08 0 18.84 18.84 0 0 1-6-14.2V692h12.21v27.66a8.47 8.47 0 0 0 8.84 8.77 8.43 8.43 0 0 0 6.23-2.47 8.64 8.64 0 0 0 2.55-6.3ZM709.88 738.84V692h23.24a16.7 16.7 0 0 1 11.19 3.81 12.05 12.05 0 0 1 4.49 9.58 11.9 11.9 0 0 1-4 9.11 12.24 12.24 0 0 1 5.69 10.65 12.38 12.38 0 0 1-4.62 9.85 16.82 16.82 0 0 1-11.39 3.88Zm12.26-35.63v6.7h10.78a3.1 3.1 0 0 0 3.08-2.68 1.64 1.64 0 0 0 .07-.67 3.15 3.15 0 0 0-3.15-3.35Zm0 17v7.37h12.12a3.69 3.69 0 0 0 0-7.37Z"
            className="af8f8041-3ed3-44b4-82fd-db6f205150a7"
          />
          <path
            d="M397 5.18 391.12 0l-5.92 5.18a358.66 358.66 0 0 0-109.06 369.74c1.68 5.84 3.51 11.68 5.54 17.41A358.88 358.88 0 0 0 385.2 546.14l5.92 5.18 5.92-5.18A359.63 359.63 0 0 0 477 446a355.76 355.76 0 0 0 23.57-53.67c2-5.77 3.85-11.57 5.53-17.45a352.48 352.48 0 0 0 11.76-59.2 350.17 350.17 0 0 0 2.26-40A359.19 359.19 0 0 0 397 5.18ZM460.88 438a341.34 341.34 0 0 1-69.76 89.3 340.61 340.61 0 0 1-92.62-141.36c-.08-.27-.19-.51-.27-.74a3.29 3.29 0 0 1-.24-.78c-2-5.68-3.73-11.45-5.33-17.29-.23-.74-.43-1.48-.62-2.22A340.64 340.64 0 0 1 391.12 24a341.32 341.32 0 0 1 111 251.69q0 16.41-1.56 32.6a335.67 335.67 0 0 1-11 58.81c-1.59 5.84-3.39 11.57-5.33 17.29A339 339 0 0 1 460.88 438Z"
            style={{
              fill: "url(#bc1e8e34-ee38-4cfb-bb45-de21dc351552)",
            }}
          />
          <path
            d="M641.75 597.63h-18c0-88.11-49.23-164.95-121.64-204.37-.54-.27-1.05-.58-1.59-.85h-.08c-1.33-.7-2.61-1.4-3.93-2.07-2.69-1.4-5.42-2.72-8.15-4-1.4-.66-2.76-1.24-4.16-1.87-.31-.15-.66-.31-1-.43s-.66-.27-1-.39A232.75 232.75 0 0 0 354 367.91a226.85 226.85 0 0 0-56 16.51c-5.53 2.42-11 5.07-16.28 7.91l-1.76.93a233.2 233.2 0 0 0-47.71 34.59c-.54.47-1.09 1-1.6 1.48a232 232 0 0 0-72.17 168.3h-18a250.08 250.08 0 0 1 83.7-186.8c.54-.47 1.09-1 1.63-1.4a249.74 249.74 0 0 1 48.61-33.62c.59-.31 1.17-.62 1.75-.89 5.38-2.81 10.83-5.42 16.44-7.79a245.22 245.22 0 0 1 56-16.55 250.07 250.07 0 0 1 140.87 16.55c.9.35 1.76.74 2.61 1.09s1.6.7 2.38 1.09c1.13.51 2.22 1.05 3.35 1.56 2.76 1.28 5.49 2.65 8.18 4.05.39.19.74.39 1.13.58 79.98 41.91 134.62 125.77 134.62 222.13Z"
            style={{
              fill: "url(#ab1951ab-b76b-4254-b661-1c89e0212578)",
            }}
          />
          <path
            d="M483.23 384c-.31-.11-.66-.27-1-.39.34.11.69.23 1 .39Z"
            style={{
              fill: "url(#ff857098-8466-4fba-9cda-300f3a1bdcd7)",
            }}
          />
          <path
            d="M500.53 392.37A355.76 355.76 0 0 1 477 446l-3-1.6c-4.36-2.37-8.76-4.52-13.12-6.42a339 339 0 0 0 23.33-53.6c1.4.63 2.76 1.21 4.16 1.87 2.73 1.25 5.46 2.57 8.15 4 1.32.67 2.6 1.37 3.93 2.07.04.01.04.01.08.05Z"
            style={{
              fill: "url(#b7c841e4-f2c3-4f56-b703-aa8e14002b4e)",
            }}
          />
          <path
            d="M517.82 315.72a352.48 352.48 0 0 1-11.76 59.2c-2.69-1.4-5.42-2.77-8.18-4.05-1.13-.55-2.22-1.09-3.35-1.56-.78-.39-1.56-.74-2.38-1.09s-1.71-.78-2.61-1.13a335.67 335.67 0 0 0 11-58.81l9.15 3.85c2.76 1.17 5.44 2.34 8.13 3.59Z"
            style={{
              fill: "url(#af61b194-1557-4784-934f-d83b83ac1dc2)",
            }}
          />
          <path
            d="m281.68 392.33-1.76.93a233.2 233.2 0 0 0-47.71 34.59l-5.14-14.61c-.43-1.28-.9-2.57-1.29-3.81a249.74 249.74 0 0 1 48.61-33.62c.59-.31 1.17-.62 1.75-.89 1.68 5.88 3.55 11.64 5.54 17.41Z"
            style={{
              fill: "url(#b8f5d167-1152-4821-919e-33f1ce4f96f5)",
            }}
          />
          <path
            d="M298.23 385.2c.08.23.19.47.27.74a2.52 2.52 0 0 1-.27-.74Z"
            style={{
              fill: "url(#baab9329-9272-4756-a615-9148b759e2c5)",
            }}
          />
          <path
            d="M298 384.42a3.29 3.29 0 0 0 .24.78 6.06 6.06 0 0 1-.27-.78c-2-5.68-3.74-11.45-5.34-17.29a45.974 45.974 0 0 0 0 0 245.22 245.22 0 0 1 56-16.55c1.48 5.53 3.15 11 5 16.2l.39 1.13A226.85 226.85 0 0 0 298 384.42Z"
            style={{
              fill: "url(#bfc6471c-1b80-4fcf-b125-88d252764d69)",
            }}
          />
        </g>
      </g>
    </svg>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
