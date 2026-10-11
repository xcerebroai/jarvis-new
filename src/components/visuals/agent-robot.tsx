import "./agent-robot.css";

export type AgentRobotRole = "jessica" | "alex" | "atlas" | "mason";

type AgentRobotProps = {
  role: AgentRobotRole;
  className?: string;
};

/** Decorative, server-rendered artwork. Each role has its own SVG paint IDs. */
export function AgentRobot({ role, className = "" }: AgentRobotProps) {
  const id = `jarvis-robot-${role}`;
  const paint = (name: string) => `url(#${id}-${name})`;
  const wide = role === "atlas";
  const square = role === "alex";
  const tall = role === "mason";
  const accent = {
    jessica: "#8bddff",
    alex: "#86a9ff",
    atlas: "#73c1ff",
    mason: "#b0c7ed",
  }[role];
  const helmet = wide
    ? "M91 34 108 27H141L158 38 164 69 156 94 139 110H109L91 94 85 65Z"
    : square
      ? "M95 32H150L160 45V83L149 103 132 111H115L96 100 87 82V46Z"
      : tall
        ? "M112 25H137L153 39 158 70 150 94 134 111H117L101 97 92 72 96 43Z"
        : "M108 29H138L154 41 159 69 149 96 132 108H116L98 95 89 68 94 44Z";
  const chest = wide
    ? "M91 114 108 109H142L160 117 175 141 158 174 145 184H103L87 171 71 141Z"
    : square
      ? "M92 114H153L166 130 162 167 148 181H99L85 166 81 129Z"
      : tall
        ? "M102 113 124 119 146 113 157 132 151 170 137 185H110L96 169 91 132Z"
        : "M99 115 122 111 145 115 161 129 153 156 143 181H106L94 158 85 129Z";

  return (
    <svg
      className={`agent-robot agent-robot--${role} ${className}`}
      viewBox="0 0 260 240"
      width="260"
      height="240"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={`${id}-pearl`}
          x1="72"
          y1="50"
          x2="174"
          y2="190"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f4f9ff" />
          <stop offset=".35" stopColor="#638298" />
          <stop offset=".62" stopColor="#d0dfeb" />
          <stop offset="1" stopColor="#263d52" />
        </linearGradient>
        <linearGradient
          id={`${id}-steel`}
          x1="70"
          y1="120"
          x2="161"
          y2="209"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7892aa" />
          <stop offset=".45" stopColor="#142333" />
          <stop offset=".72" stopColor="#3a526b" />
          <stop offset="1" stopColor="#07121d" />
        </linearGradient>
        <linearGradient
          id={`${id}-visor`}
          x1="83"
          y1="75"
          x2="152"
          y2="110"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1e4057" />
          <stop offset=".55" stopColor="#07151f" />
          <stop offset="1" stopColor="#142c3d" />
        </linearGradient>
        <linearGradient id={`${id}-lens`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#bdf8ff" stopOpacity=".65" />
          <stop offset=".45" stopColor="#68d7f6" stopOpacity=".08" />
          <stop offset="1" stopColor="#2e718c" stopOpacity=".3" />
        </linearGradient>
        <radialGradient id={`${id}-halo`}>
          <stop stopColor={accent} stopOpacity=".15" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="129" cy="126" rx="119" ry="106" fill={paint("halo")} />
      <path
        d="M38 133a91 91 0 0 1 175-24M204 174a91 91 0 0 1-149 16"
        stroke={accent}
        strokeOpacity=".17"
        strokeDasharray="3 7"
      />
      <circle cx="41" cy="118" r="2" fill={accent} opacity=".65" />
      <path
        d="M213 47v8m-4-4h8M43 180v6m-3-3h6"
        stroke={accent}
        strokeOpacity=".65"
        strokeLinecap="round"
      />
      <ellipse
        className="agent-robot__shadow"
        cx="124"
        cy="219"
        rx="66"
        ry="9"
        fill="#02070d"
        opacity=".65"
      />
      <ellipse
        cx="124"
        cy="218"
        rx="48"
        ry="5"
        stroke={accent}
        strokeOpacity=".22"
      />

      <g className="agent-robot__body">
        {/* A compact exoskeleton, layered armor and exposed mechanical joints. */}
        <path
          d="M113 101h22l6 19-17 9-18-9Z"
          fill={paint("steel")}
          stroke="#638199"
        />
        <path
          d="M115 107h18m-20 6h22m-18 6h14"
          stroke="#9baebf"
          strokeWidth="1.5"
        />
        <path
          d="M106 166h35l13 22-14 10h-32l-13-10Z"
          fill={paint("steel")}
          stroke="#405970"
        />
        <path
          d="M103 180 115 185 112 206 101 209 95 198ZM137 184l13-5 8 19-8 12-12-6Z"
          fill={paint("pearl")}
          stroke="#435e75"
        />
        <path
          d="m103 184 8 3-3 14-8 1ZM141 187l7-4 6 17-11 1Z"
          fill="#132b40"
        />
        <path
          d="M97 203h16l3 13-7 5H83l-1-7ZM137 203h18l13 11-1 7h-28l-5-6Z"
          fill={paint("steel")}
          stroke="#6d8ba3"
        />
        <path
          d="m96 207 14 1 1 6H88ZM141 208l13-1 8 7h-23Z"
          fill={paint("pearl")}
        />
        <path d="M87 218h23m30 0h23" stroke={accent} strokeWidth="1.6" />

        {/* The stance stays open; every role carries a different shoulder profile. */}
        <path
          d="m86 128-13 17-5 29 11 9 13-8 6-32ZM156 131l17 10 18 22-8 15-15-7-17-26Z"
          fill="#101d2c"
          stroke="#426077"
        />
        <path
          d="m76 145 9 5-5 18-10-2ZM174 144l11 16-7 9-10-18Z"
          fill={paint("pearl")}
          stroke="#6c899f"
        />
        <path
          d="m68 172 11-3 8 9-3 11-10 4-9-9ZM178 164l10-5 10 9-2 10-10 5-10-9Z"
          fill={paint("steel")}
          stroke="#90a9bc"
        />
        <path
          d="m71 179 7-3 4 4m99-11 6-4 6 4"
          stroke={accent}
          strokeWidth="1.5"
        />
        <path
          d={
            wide
              ? "M91 115 79 110 59 128 66 149 88 143 101 126ZM153 114l17-4 19 16-6 22-25-8-12-16Z"
              : square
                ? "M94 114H78l-14 18 8 15 22-4 10-17ZM152 114h19l14 16-7 17-24-6-10-15Z"
                : tall
                  ? "M102 115 87 111 72 129 76 141l20-3 11-14ZM145 115l15-4 17 17-2 14-22-4-10-15Z"
                  : "M100 115 81 112 67 130l7 15 21-7 12-13ZM146 115l18-3 17 16-7 17-19-8-12-13Z"
          }
          fill={paint("pearl")}
          stroke="#6c879c"
          strokeWidth="1.2"
        />
        <path
          d="m79 120-8 10 4 8 13-4m75-14 10 9-3 9-12-4"
          fill="#1c3348"
          stroke="#4f738e"
        />
        <path
          d={chest}
          fill={paint("steel")}
          stroke="#70899f"
          strokeWidth="1.2"
        />
        <path
          d="m97 120 25 9-6 17-24-9-4-8ZM127 129l24-9 10 10-6 11-21 5Z"
          fill={paint("pearl")}
          stroke="#8ea7ba"
        />
        <path
          d="m97 124 17 6-2 6-14-5ZM136 130l14-5 5 6-17 6Z"
          fill="#37546e"
        />
        <path
          d="m94 142 22 10-4 16-12-6ZM134 152l21-10-5 22-12 5Z"
          fill={paint("pearl")}
          stroke="#4e6c84"
        />
        <path
          d="m114 148 10-9 10 9-4 23h-12Z"
          fill="#071727"
          stroke="#7093ac"
        />
        <path d="m120 150 4-4 4 4-2 15h-4Z" fill={accent} />
        <path d="M107 172h35l-5 7h-25Z" fill="#405c73" stroke="#86a0b6" />
        <path d="M115 175h17" stroke={accent} strokeWidth="1.4" />
        <path
          d="m91 134 9 5m-7 6 6 3m52-11 7-4m-8 12 6-3"
          stroke="#c9e3f5"
          strokeOpacity=".7"
        />
        {wide && (
          <path
            d="m79 124-9 5 4 10 10-3m80-12 13 5-4 10-11-3"
            stroke={accent}
            strokeWidth="1.6"
          />
        )}
        {square && (
          <path
            d="M99 151h6m-6 5h6m38-5h6m-6 5h6"
            stroke={accent}
            strokeWidth="1.5"
          />
        )}
        {tall && (
          <path
            d="m104 115 7 17 13-7 12 7 8-17"
            stroke="#c5dbe9"
            strokeWidth="1.5"
          />
        )}

        <g className="agent-robot__head">
          <path
            d="M91 53 84 58v24l10 8m62-37 8 5v24l-10 8"
            fill={paint("steel")}
            stroke="#7690a4"
          />
          <path
            d={helmet}
            fill={paint("pearl")}
            stroke="#8aa1b6"
            strokeWidth="1.2"
          />
          <path d="m111 32 12-5 13 5 6 23-18 10-19-11Z" fill={paint("steel")} />
          <path d="m123 31-3 20 4 7 4-7-3-20Z" fill="#d5e5f0" />
          <path
            d="m98 43 9-6-6 18-7 9ZM142 37l8 8 4 19-8-9Z"
            fill="#e1edf4"
            fillOpacity=".82"
          />
          <path
            d="m97 56 26 10 27-10 6 15-8 18-24 10-25-11-8-18Z"
            fill={paint("visor")}
            stroke="#526f87"
          />
          <path
            d="m95 61 22 8-1 6-20-6ZM131 69l22-8-1 8-20 6Z"
            fill="#8aadc8"
          />
          <g className="agent-robot__eyes">
            <path
              d="m97 72 20 4-3 5-13-3ZM131 76l20-4-4 6-13 3Z"
              fill={accent}
            />
            <path
              d="m100 73 14 3m21 0 13-3"
              stroke="#edfaff"
              strokeWidth="1.3"
            />
          </g>
          <path
            d="m123 70-6 16 7 6 7-6-6-16"
            fill={paint("pearl")}
            stroke="#54748e"
          />
          <path
            d="m97 79 10 5 4 13-10-6-7-14ZM151 79l-10 5-5 13 10-6 8-14Z"
            fill={paint("pearl")}
          />
          <path
            d="m110 93 14 5 13-5-3 11-10 5-11-5Z"
            fill={paint("steel")}
            stroke="#708b9f"
          />
          <path d="M117 100h14m-12 3h10" stroke="#a9c4d8" strokeWidth="1" />
          <path
            d="m99 88 6 3m-4 1 5 3m40-7-6 3m4 1-5 3"
            stroke="#1e425e"
            strokeWidth="1.3"
          />
          <path
            d="m96 47-4 16m62-15 3 15"
            stroke={accent}
            strokeOpacity=".8"
            strokeWidth="1.5"
          />
          {role === "jessica" && (
            <g>
              <path d="M86 72V53l13-19 11-5" stroke="#1b3044" strokeWidth="5" />
              <path
                d="M86 72V53l13-19 11-5"
                stroke="#9db8ce"
                strokeWidth="1.5"
              />
              <path
                d="m81 59 10-3 3 23-9 6-6-7Z"
                fill={paint("steel")}
                stroke={accent}
              />
              <path d="m85 81 6 17 17 4" stroke="#87a6bd" strokeWidth="2.5" />
              <path d="m106 99 10 1 1 5-11-1Z" fill="#10273c" stroke={accent} />
            </g>
          )}
          {role === "alex" && (
            <path
              d="M95 36h14m27 0h14M94 42h10m40 0h10"
              stroke="#d0e1ef"
              strokeWidth="1.3"
            />
          )}
          {role === "atlas" && (
            <g>
              <path
                d="m88 48-12-9-7 3 6 13 12 3"
                fill={paint("steel")}
                stroke="#86a6bf"
              />
              <path d="m76 44 5 9" stroke={accent} strokeWidth="2" />
            </g>
          )}
          {role === "mason" && (
            <path
              d="m112 27 12-8 13 8-3 9-10-6-10 6Z"
              fill={paint("steel")}
              stroke="#88a6bd"
            />
          )}
        </g>
      </g>

      {role === "jessica" && (
        <g className="agent-robot__chat">
          <path
            d="M183 51h45q9 0 9 9v22q0 9-9 9h-25l-14 10 2-10h-8q-9 0-9-9V60q0-9 9-9Z"
            fill="#102936"
            stroke={accent}
            strokeOpacity=".8"
          />
          {[190, 205, 220].map((x, i) => (
            <circle
              className={`agent-robot__chat-dot agent-robot__chat-dot--${i}`}
              key={x}
              cx={x}
              cy="72"
              r="3"
              fill={accent}
            />
          ))}
          <path
            d="M30 136h23m-18 7h14"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".45"
          />
        </g>
      )}
      {role === "alex" && (
        <g>
          <rect
            x="175"
            y="110"
            width="63"
            height="82"
            rx="12"
            fill="#0c1d2a"
            stroke="#406479"
          />
          {[0, 1, 2].map((n) => (
            <g className={`agent-robot__task agent-robot__task--${n}`} key={n}>
              <rect
                x="182"
                y={119 + n * 23}
                width="49"
                height="17"
                rx="5"
                fill="#1b3648"
                stroke={accent}
                strokeOpacity=".45"
              />
              <path
                d={`M188 ${127 + n * 23}l3 3 5-6`}
                stroke={accent}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={`M202 ${125 + n * 23}h21m-21 5h13`}
                stroke="#a2bacb"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          ))}
          <path
            d="M39 101h19m-13 7h13"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".5"
          />
        </g>
      )}
      {role === "atlas" && (
        <g>
          <path
            d="m169 163 28-48 36 34-21 44Z"
            fill="#132733"
            fillOpacity=".8"
            stroke={accent}
            strokeOpacity=".35"
          />
          <path
            d="m186 146 16-13 17 13m-28-4v23h23v-23m-15 23v-12h8v12"
            stroke={accent}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="agent-robot__scan"
            d="M180 141h47"
            stroke="#c4faff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="m175 172 13 12 36-10"
            stroke="#568ea2"
            strokeDasharray="3 4"
          />
          {[
            [175, 172],
            [188, 184],
            [224, 174],
            [197, 115],
          ].map(([x, y]) => (
            <circle
              key={x}
              cx={x}
              cy={y}
              r="3"
              fill={accent}
              stroke="#d6fcff"
            />
          ))}
          <circle cx="41" cy="147" r="13" stroke={accent} strokeOpacity=".45" />
          <path d="M35 149l4-7 5 11 4-8" stroke={accent} strokeWidth="1.5" />
        </g>
      )}
      {role === "mason" && (
        <g>
          <path
            d="M179 111h37l13 13v70h-50q-6 0-6-6v-71q0-6 6-6Z"
            fill="#deedf1"
            stroke="#678c9e"
            strokeWidth="1.5"
          />
          <path d="M216 111v14h13" fill="#9ebacb" stroke="#678c9e" />
          <path
            d="M185 135h30m-30 7h23m-23 7h28"
            stroke="#7895a6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="agent-robot__signature"
            d="m184 169 4-8 1 12 6-8 3 6 5-2h10"
            stroke="#316783"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
          />
          <g className="agent-robot__pen">
            <path
              d="m168 173 16-29 5 3-16 29-6 4Z"
              fill={accent}
              stroke="#285069"
            />
            <path d="m167 180 6-4-5-3Z" fill="#e3f9ff" />
          </g>
          <g className="agent-robot__approval">
            <circle cx="222" cy="189" r="13" fill="#102a32" stroke={accent} />
            <path
              d="m216 189 4 4 8-9"
              stroke={accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      )}
    </svg>
  );
}
