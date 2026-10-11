import "./jarvis-core.css";

type JarvisCoreProps = { className?: string };

const particles = Array.from({ length: 36 }, (_, index) => {
  const angle = (index * 137.508 * Math.PI) / 180;
  const radius = 155 + ((index * 37) % 109);
  return {
    x: 320 + Math.cos(angle) * radius,
    y: 320 + Math.sin(angle) * radius,
    radius: index % 7 === 0 ? 2.3 : index % 3 === 0 ? 1.4 : 0.8,
    opacity: 0.24 + (index % 5) * 0.14,
  };
});

/** One self-contained hero artwork. Motion and interaction need no hydration. */
export function JarvisCore({ className = "" }: JarvisCoreProps) {
  return (
    <a
      href="/pricing/"
      aria-label="Explore all Jarvis plans"
      data-jarvis-core=""
      className={`jarvis-core ${className}`.trim()}
    >
      <div className="jarvis-core__field" aria-hidden="true">
        <div className="jarvis-core__atmosphere" />
        <svg
          className="jarvis-core__art"
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="jarvis-core-aura">
              <stop offset="0" stopColor="#e5ffff" stopOpacity=".52" />
              <stop offset=".32" stopColor="#31e7ff" stopOpacity=".31" />
              <stop offset=".62" stopColor="#0874b6" stopOpacity=".13" />
              <stop offset="1" stopColor="#0874b6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="jarvis-core-sphere" cx="44%" cy="40%" r="60%">
              <stop offset="0" stopColor="#fff9df" />
              <stop offset=".15" stopColor="#f1ffff" />
              <stop offset=".38" stopColor="#a3faff" />
              <stop offset=".64" stopColor="#27d8f4" />
              <stop offset=".84" stopColor="#06749d" stopOpacity=".78" />
              <stop offset="1" stopColor="#012a4f" stopOpacity=".06" />
            </radialGradient>
            <radialGradient id="jarvis-core-heart">
              <stop offset="0" stopColor="#fffbe8" />
              <stop offset=".24" stopColor="#fffdf2" stopOpacity=".98" />
              <stop offset=".55" stopColor="#ceffff" stopOpacity=".64" />
              <stop offset="1" stopColor="#70eaff" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="jarvis-core-orbit"
              x1="93"
              y1="189"
              x2="550"
              y2="435"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#126994" stopOpacity=".05" />
              <stop offset=".25" stopColor="#6adeff" stopOpacity=".45" />
              <stop offset=".48" stopColor="#d3ffff" />
              <stop offset=".73" stopColor="#25d8ff" stopOpacity=".7" />
              <stop offset="1" stopColor="#126994" stopOpacity=".08" />
            </linearGradient>
            <linearGradient
              id="jarvis-core-filament"
              x1="227"
              y1="258"
              x2="406"
              y2="384"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01a7e8" stopOpacity=".15" />
              <stop offset=".28" stopColor="#8bfaff" />
              <stop offset=".51" stopColor="#fff9e4" />
              <stop offset=".72" stopColor="#c9ffff" />
              <stop offset="1" stopColor="#09bce7" stopOpacity=".1" />
            </linearGradient>
            <filter
              id="jarvis-core-bloom"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="4" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter
              id="jarvis-core-plasma"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".025 .065"
                numOctaves="2"
                seed="12"
                result="texture"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="texture"
                scale="11"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
            <filter
              id="jarvis-core-soft"
              x="-70%"
              y="-70%"
              width="240%"
              height="240%"
            >
              <feGaussianBlur stdDeviation="11" />
            </filter>
          </defs>

          <circle
            cx="320"
            cy="320"
            r="281"
            fill="url(#jarvis-core-aura)"
            className="jarvis-core__aura"
          />

          <g
            className="jarvis-core__outer-orbit"
            stroke="url(#jarvis-core-orbit)"
          >
            <ellipse
              cx="320"
              cy="320"
              rx="260"
              ry="93"
              transform="rotate(-28 320 320)"
              strokeWidth=".65"
            />
            <ellipse
              cx="320"
              cy="320"
              rx="242"
              ry="104"
              transform="rotate(47 320 320)"
              strokeWidth=".7"
              opacity=".7"
            />
            <ellipse
              cx="320"
              cy="320"
              rx="221"
              ry="83"
              transform="rotate(101 320 320)"
              strokeWidth=".5"
              opacity=".6"
            />
            <circle
              cx="320"
              cy="320"
              r="261"
              strokeWidth=".7"
              strokeDasharray="1 18 1 43"
              opacity=".5"
            />
          </g>

          <g className="jarvis-core__particles" fill="#a5f6ff">
            {particles.map((particle, index) => (
              <circle
                key={index}
                cx={particle.x}
                cy={particle.y}
                r={particle.radius}
                opacity={particle.opacity}
              />
            ))}
          </g>

          <g className="jarvis-core__segments" strokeLinecap="round">
            <circle
              cx="320"
              cy="320"
              r="174"
              stroke="#15728b"
              strokeWidth=".6"
              strokeDasharray="62 13 4 16"
              opacity=".7"
            />
            <circle
              cx="320"
              cy="320"
              r="166"
              stroke="#49e0ff"
              strokeWidth="1.7"
              strokeDasharray="113 73 8 67 38 124"
              opacity=".66"
            />
            <circle
              cx="320"
              cy="320"
              r="153"
              stroke="#a2f7ff"
              strokeWidth=".8"
              strokeDasharray="43 35 4 51"
              opacity=".8"
            />
            <circle
              cx="320"
              cy="320"
              r="148"
              stroke="#197fa1"
              strokeWidth="5"
              strokeDasharray="4 9"
              opacity=".23"
            />
          </g>

          <g
            className="jarvis-core__inner-orbit"
            stroke="url(#jarvis-core-orbit)"
            filter="url(#jarvis-core-bloom)"
          >
            <ellipse
              cx="320"
              cy="320"
              rx="200"
              ry="65"
              transform="rotate(-33 320 320)"
              strokeWidth="1.7"
              strokeDasharray="235 90 80 185"
            />
            <ellipse
              cx="320"
              cy="320"
              rx="193"
              ry="83"
              transform="rotate(64 320 320)"
              strokeWidth="1.1"
              strokeDasharray="170 120 62 210"
              opacity=".75"
            />
          </g>

          <g className="jarvis-core__body">
            <circle
              cx="320"
              cy="320"
              r="123"
              fill="#0bd7ff"
              opacity=".17"
              filter="url(#jarvis-core-soft)"
            />
            <circle
              cx="320"
              cy="320"
              r="113"
              fill="url(#jarvis-core-sphere)"
              opacity=".88"
            />
            <g filter="url(#jarvis-core-plasma)">
              <path
                d="M215 319C220 260 267 217 326 218C383 220 426 266 427 322C423 376 382 421 324 423C267 424 218 380 215 319Z"
                stroke="#8cf8ff"
                strokeWidth="2.4"
                opacity=".8"
              />
              <g
                className="jarvis-core__filaments"
                stroke="url(#jarvis-core-filament)"
              >
                <path
                  d="M234 351C204 304 270 230 335 233C400 236 416 293 377 320C338 347 239 321 248 285C257 253 368 272 392 340C414 401 289 429 247 365C216 319 281 276 351 291C407 303 378 377 314 387"
                  strokeWidth="3"
                />
                <path
                  d="M253 247C304 220 379 242 401 296C421 346 367 403 308 401C251 399 226 362 254 328C281 295 378 307 374 348C369 389 279 369 263 311C249 261 329 245 372 280"
                  strokeWidth="1.25"
                />
                <path
                  d="M232 324C257 274 386 251 403 317C416 367 287 401 254 351C220 300 336 236 369 287C395 327 289 374 273 332C257 293 348 278 353 320C358 352 312 365 289 344"
                  strokeWidth="2"
                  opacity=".8"
                />
                <path
                  d="M299 211C278 263 383 293 394 335C412 397 315 431 275 390C234 348 348 310 360 279C376 234 281 213 257 269C233 321 335 365 339 412"
                  strokeWidth="1.5"
                />
                <path
                  d="M219 291C274 314 254 390 320 404C376 416 398 330 351 260C329 226 278 223 255 250M219 347C272 374 276 243 332 232C393 220 434 319 390 368"
                  strokeWidth=".8"
                  opacity=".8"
                />
              </g>
            </g>
            <circle
              cx="310"
              cy="309"
              r="76"
              fill="url(#jarvis-core-heart)"
              className="jarvis-core__heart"
            />
            <path
              d="M232 270C251 234 298 211 335 221M357 416C386 407 411 380 421 350"
              stroke="#d4ffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#jarvis-core-bloom)"
              opacity=".85"
            />
          </g>

          <g
            className="jarvis-core__front-orbit"
            stroke="url(#jarvis-core-orbit)"
            strokeLinecap="round"
          >
            <path
              d="M103 409C161 449 306 408 434 330C507 286 550 243 548 216"
              strokeWidth="1.1"
            />
            <path
              d="M108 413C174 454 323 404 434 334"
              strokeWidth="4"
              opacity=".2"
              filter="url(#jarvis-core-bloom)"
            />
            <path
              d="M130 421C167 430 197 425 221 418"
              stroke="#b3fbff"
              strokeWidth="2.3"
            />
            <path
              d="M416 149C448 196 418 326 348 443C319 492 290 525 265 541"
              strokeWidth=".7"
              opacity=".6"
            />
          </g>

          <g
            className="jarvis-core__satellites"
            filter="url(#jarvis-core-bloom)"
          >
            <circle cx="168" cy="407" r="3.2" fill="#e6ffff" />
            <circle cx="471" cy="234" r="2.7" fill="#a6f4ff" />
            <circle cx="372" cy="467" r="1.9" fill="#40ddff" />
          </g>

          <g stroke="#448398" strokeWidth=".6" opacity=".56">
            <path d="M452 177L470 159H515M187 244H151L138 231M220 450L196 474H149M453 399H487L500 412" />
            <circle cx="452" cy="177" r="2" fill="#8cf3ff" stroke="none" />
            <circle cx="187" cy="244" r="2" fill="#8cf3ff" stroke="none" />
            <circle cx="220" cy="450" r="2" fill="#8cf3ff" stroke="none" />
            <circle cx="453" cy="399" r="2" fill="#8cf3ff" stroke="none" />
          </g>
        </svg>
        <span className="jarvis-core__label jarvis-core__label--contacts">
          Contacts
        </span>
        <span className="jarvis-core__label jarvis-core__label--conversations">
          Conversations
        </span>
        <span className="jarvis-core__label jarvis-core__label--workflows">
          Workflows
        </span>
        <span className="jarvis-core__label jarvis-core__label--reporting">
          Reporting
        </span>
      </div>
      <span className="jarvis-core__invitation" aria-hidden="true">
        Explore all plans <span>↗</span>
      </span>
    </a>
  );
}
