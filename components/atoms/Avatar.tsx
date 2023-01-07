import * as React from 'react'

const Avatar = props => (
  <svg
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12 160c0 66.274 53.726 120 120 120s120-53.726 120-120h12V0H0v160h12Z"
        id="c"
      />
      <path
        d="M124 144.611V163h4c39.765 0 72 32.235 72 72v9H0v-9c0-39.765 32.235-72 72-72h4v-18.389c-17.237-8.189-29.628-24.924-31.695-44.73C38.48 99.058 34 94.052 34 88V74c0-5.946 4.325-10.882 10-11.834V56c0-30.928 25.072-56 56-56s56 25.072 56 56v6.166c5.675.952 10 5.888 10 11.834v14c0 6.052-4.48 11.058-10.305 11.881-2.067 19.806-14.458 36.541-31.695 44.73Z"
        id="e"
      />
      <circle id="a" cx={120} cy={120} r={120} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(12 40)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#E6E6E6" xlinkHref="#a" />
        <g mask="url(#b)" fill="#3084F2">
          <path d="M0 0h240v240H0z" />
        </g>
      </g>
      <mask id="d" fill="#fff">
        <use xlinkHref="#c" />
      </mask>
      <g mask="url(#d)">
        <g transform="translate(32 36)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#e" />
          </mask>
          <use fill="#D0C6AC" xlinkHref="#e" />
          <g mask="url(#f)" fill="#FFDBB4">
            <path d="M0 0h264v280H0z" />
          </g>
          <path
            d="M156 79v23c0 30.928-25.072 56-56 56s-56-25.072-56-56V79v15c0 30.928 25.072 56 56 56s56-25.072 56-56V79Z"
            fillOpacity={0.1}
            fill="#000"
            mask="url(#f)"
          />
        </g>
        <g transform="translate(0 170)">
          <defs>
            <path
              d="M133.96.295c36.976 3.03 66.04 34 66.04 71.757V81H0v-8.948C0 33.952 29.592 2.765 67.045.22 67.015.593 67 .97 67 1.348c0 11.863 14.998 21.48 33.5 21.48 18.502 0 33.5-9.617 33.5-21.48 0-.353-.013-.704-.04-1.053Z"
              id="g"
            />
          </defs>
          <g transform="translate(32 29)">
            <mask id="h" fill="#fff">
              <use xlinkHref="#g" />
            </mask>
            <use fill="#E6E6E6" xlinkHref="#g" />
            <g mask="url(#h)" fill="#262E33">
              <path d="M-32-29h264V81H-32z" />
            </g>
            <g opacity={0.6} mask="url(#h)" fillOpacity={0.16} fill="#000">
              <ellipse
                cx={40.5}
                cy={27.848}
                rx={39.635}
                ry={26.914}
                transform="translate(60 -25)"
              />
            </g>
          </g>
          <path
            d="M100.785 29.122C62.512 30.804 32 62.365 32 101.052V110h69.362C97.96 97.92 96 83.709 96 68.5c0-14.327 1.74-27.769 4.785-39.378ZM163.638 110H232v-8.948c0-38.345-29.975-69.69-67.771-71.878C167.265 40.77 169 54.194 169 68.5c0 15.209-1.96 29.42-5.362 41.5Z"
            fill="#3A4C5A"
          />
          <path
            d="m181 86 9.556-7.167a4 4 0 0 1 4.856.043L202 84l-21 2Z"
            fill="#E6E6E6"
          />
          <path
            d="M101 28c-4 19.333-2.333 46.667 5 82H90L76 74l6-9-6-6 19-30c2.028-.63 4.028-.964 6-1ZM163 28c4 19.333 2.333 46.667-5 82h16l14-36-6-9 6-6-19-30c-2.028-.63-4.028-.964-6-1Z"
            fill="#2F4351"
          />
        </g>
        <g fill="#000">
          <g transform="translate(78 134)">
            <defs>
              <path
                d="M35.118 15.128C36.176 24.62 44.226 32 54 32c9.804 0 17.874-7.426 18.892-16.96.082-.767-.775-2.04-1.85-2.04H37.088c-1.08 0-2.075 1.178-1.97 2.128Z"
                id="i"
              />
            </defs>
            <mask id="j" fill="#fff">
              <use xlinkHref="#i" />
            </mask>
            <use fillOpacity={0.7} xlinkHref="#i" />
            <rect
              fill="#FFF"
              mask="url(#j)"
              x={39}
              y={2}
              width={31}
              height={16}
              rx={5}
            />
            <g mask="url(#j)" fill="#FF4F6D">
              <g transform="translate(38 24)">
                <circle cx={11} cy={11} r={11} />
                <circle cx={21} cy={11} r={11} />
              </g>
            </g>
          </g>
          <path
            d="M120 130c0 4.418 5.373 8 12 8s12-3.582 12-8"
            fillOpacity={0.16}
          />
          <g fillOpacity={0.6}>
            <path d="M92.16 112.447c1.847-3.798 6.004-6.447 10.838-6.447 4.816 0 8.961 2.63 10.817 6.407.552 1.122-.233 2.04-1.024 1.36-2.451-2.107-5.932-3.423-9.793-3.423-3.74 0-7.124 1.235-9.56 3.228-.891.728-1.818-.014-1.278-1.125ZM150.16 112.447c1.847-3.798 6.004-6.447 10.838-6.447 4.816 0 8.961 2.63 10.817 6.407.552 1.122-.233 2.04-1.024 1.36-2.451-2.107-5.932-3.423-9.793-3.423-3.74 0-7.124 1.235-9.56 3.228-.891.728-1.818-.014-1.278-1.125Z" />
          </g>
          <g fillRule="nonzero" fillOpacity={0.6}>
            <path d="M91.63 99.159c3.915-5.51 14.648-8.598 23.893-6.328a2 2 0 0 0 .954-3.884c-10.737-2.637-23.165.94-28.107 7.894a2 2 0 0 0 3.26 2.318ZM172.37 99.159c-3.915-5.51-14.648-8.598-23.893-6.328a2 2 0 0 1-.954-3.884c10.737-2.637 23.165.94 28.108 7.894a2 2 0 0 1-3.26 2.318Z" />
          </g>
        </g>
        <defs>
          <path id="k" d="M0 0h264v280H0z" />
          <path
            d="M185.832 73.929c1.757.988 3.148 10.899 3.216 14.689.042 2.338.08 11.256-2.394 10.485-.753-.235-1.902-4.956-2.066-7.719-.163-2.763-1.733-12.164-4.141-16.49-.55-.988-2.126-2.723-1.445-3.56.844-1.036 1.664-.434 2.695-.02 1.115.45 3.937 2.504 4.135 2.615Zm.805-2.972c-.746.962-5.841-1.74-7.966-2.913-17.845-9.86-21.31-12.995-49.425-12.586-28.116.409-47.379 13.582-48.462 14.93-.754.937-1.716 3.44-2.508 10.413-.791 6.972.22 19.477-2.646 19.462-2.438-.013-2.97-23.786-1.916-33.217.161-1.448.784-4.038.333-5.34-.394-1.138-2.322-1.135-2.014-3.03.35-2.159 2.525-1.087 3.473-2.119 1.795-1.954-.974-2.417-1.433-4.126-.682-2.542 1.29-3.197 3.067-4 1.966-.887 1.71-.108 3.306-1.846-2.131-1.563-2.902-3.691.016-4.833 1.24-.485 4.465.157 5.436-.572.253-.19.353-1.28.51-1.502 1.55-2.219 1.168-3.825 1.01-6.316-.129-2.038-.112-3.909 2.329-4.112 1.628-.136 2.952 1.194 4.411 1.586 1.619.435 1.01.752 2.279-.121 2.226-1.533.711-4.52 2.476-6.303 2.423-2.446 4.01 1.14 5.956 1.41 4.222.588 2.867-3.7 5.367-5.272 2.988-1.876 3.277 2.251 5.143 2.398 1.617.127 4.529-2.993 5.938-3.575 4.183-1.726 6.255 3.13 10.237 2.511 2.89-.45 3.67-.816 6.277.828 2.53 1.595 3.132.454 5.998.432 2.025-.016 3.265 1.676 4.959 1.853.844.088 1.653-.792 2.56-.737 3.237.197 3.442 4.383 6.014 5.536 2.35 1.053 5.112-.427 7.445-.7 5.69-.668 1.793 4.647 1.954 7.819 2.233.52 4.5-1.564 6.724-1.18 3.502.604 2.18 4.233 1.368 6.68 2.427-.044 8.76-2.737 10.332.707.81 1.776-1.078 4.147-1.047 5.952.043 2.542 1.91 4.645 2.571 7.05.892 3.247 2.163 11.95-.072 14.833Z"
            id="m"
          />
        </defs>
        <mask id="l" fill="#fff">
          <use xlinkHref="#k" />
        </mask>
        <g mask="url(#l)">
          <g>
            <mask id="n" fill="#fff">
              <use xlinkHref="#m" />
            </mask>
            <use fill="#2E3257" xlinkHref="#m" />
            <g mask="url(#n)" fill="#4A312C">
              <path d="M0 0h264v280H0z" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default Avatar
