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
  const headX = wide ? 64 : tall ? 79 : 72;
  const headWidth = wide ? 112 : tall ? 88 : 104;

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
          <stop stopColor="#f2fcff" />
          <stop offset=".35" stopColor="#b7d6e3" />
          <stop offset=".62" stopColor="#edf8fd" />
          <stop offset="1" stopColor="#5f8295" />
        </linearGradient>
        <linearGradient
          id={`${id}-steel`}
          x1="70"
          y1="120"
          x2="161"
          y2="209"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#536f83" />
          <stop offset=".45" stopColor="#172936" />
          <stop offset=".72" stopColor="#334f61" />
          <stop offset="1" stopColor="#0a1621" />
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
          <stop stopColor="var(--robot-accent)" stopOpacity=".15" />
          <stop offset="1" stopColor="var(--robot-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="129" cy="126" rx="119" ry="106" fill={paint("halo")} />
      <path
        d="M38 133a91 91 0 0 1 175-24M204 174a91 91 0 0 1-149 16"
        stroke="var(--robot-accent)"
        strokeOpacity=".17"
        strokeDasharray="3 7"
      />
      <circle cx="41" cy="118" r="2" fill="var(--robot-accent)" opacity=".65" />
      <path
        d="M213 47v8m-4-4h8M43 180v6m-3-3h6"
        stroke="var(--robot-accent)"
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
        stroke="var(--robot-accent)"
        strokeOpacity=".22"
      />

      <g className="agent-robot__body">
        {/* Flexible neck, hip joints, and oversized magnetic boots. */}
        <rect
          x="110"
          y="114"
          width="27"
          height="22"
          rx="9"
          fill={paint("steel")}
          stroke="#7294a7"
        />
        <path d="M114 120h19m-19 5h19" stroke="#7495a9" strokeWidth="2" />
        <path
          d="M102 178l-2 25m43-25 4 25"
          stroke="#152936"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <path
          d="M100 187v10m46-10 1 10"
          stroke="#b0d0df"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M84 201q13-6 28 0l2 10q-17 7-34 0zM135 201q13-6 26 0l6 10q-17 7-33 0z"
          fill={paint("pearl")}
          stroke="#506f82"
          strokeWidth="1.5"
        />
        <path
          d="M84 210h26m29 0h23"
          stroke="var(--robot-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {square ? (
          <path
            d="M92 128h62q10 0 10 11v40q0 11-11 11H94q-11 0-11-11v-38q0-13 9-13Z"
            fill={paint("pearl")}
            stroke="#628295"
            strokeWidth="1.5"
          />
        ) : wide ? (
          <path
            d="M94 126h58l22 19-12 38q-38 18-76-1l-12-36Z"
            fill={paint("pearl")}
            stroke="#628295"
            strokeWidth="1.5"
          />
        ) : tall ? (
          <path
            d="M97 129q26-9 51 0l8 55q-31 16-64 0Z"
            fill={paint("pearl")}
            stroke="#628295"
            strokeWidth="1.5"
          />
        ) : (
          <path
            d="M94 132q30-17 59 0l10 30q8 30-39 31-48-1-40-31Z"
            fill={paint("pearl")}
            stroke="#628295"
            strokeWidth="1.5"
          />
        )}
        <path
          d="M96 133q27-10 55 0"
          stroke="#f1fdff"
          strokeOpacity=".8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="101"
          y="145"
          width="46"
          height="30"
          rx={square ? 6 : 13}
          fill={paint("steel")}
          stroke="#6a8ea3"
        />
        <path
          d="M111 158h6l4-6 6 14 5-8h6"
          stroke="var(--robot-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="114" cy="181" r="2" fill="var(--robot-accent)" />
        <path
          d="M121 181h13"
          stroke="#557486"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Articulated arms, with role-specific tools above the hands. */}
        <path
          d={
            role === "jessica"
              ? "M88 143Q67 144 66 167"
              : "M87 145Q66 153 72 179"
          }
          stroke={paint("steel")}
          strokeWidth="13"
          strokeLinecap="round"
        />
        <circle cx="83" cy="145" r="9" fill={paint("pearl")} stroke="#628295" />
        <path
          d={tall ? "M153 145q23 5 29 26" : "M158 145q20 2 27 19"}
          stroke={paint("steel")}
          strokeWidth="13"
          strokeLinecap="round"
        />
        <circle
          cx="158"
          cy="145"
          r="9"
          fill={paint("pearl")}
          stroke="#628295"
        />
        <circle
          cx={role === "jessica" ? 66 : 72}
          cy={role === "jessica" ? 167 : 179}
          r="9"
          fill={paint("pearl")}
          stroke="#628295"
        />
        <circle
          cx={tall ? 182 : 185}
          cy={tall ? 171 : 164}
          r="9"
          fill={paint("pearl")}
          stroke="#628295"
        />

        <g className="agent-robot__head">
          <path
            d="M124 53V38"
            stroke="#738c9e"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="124" cy="35" r="5" fill="var(--robot-accent)" />
          <circle cx="122.5" cy="33.5" r="1.5" fill="#efffff" />
          <rect
            x={headX - 7}
            y="79"
            width="15"
            height="26"
            rx="7"
            fill={paint("steel")}
            stroke="#708fa2"
          />
          <rect
            x={headX + headWidth - 8}
            y="79"
            width="15"
            height="26"
            rx="7"
            fill={paint("steel")}
            stroke="#708fa2"
          />
          <rect
            x={headX}
            y="53"
            width={headWidth}
            height="72"
            rx={square ? 19 : tall ? 31 : 29}
            fill={paint("pearl")}
            stroke="#7292a6"
            strokeWidth="1.5"
          />
          <path
            d={`M${headX + 17} 61q${headWidth / 2 - 17} -8 ${headWidth - 34} 0`}
            stroke="#f4feff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".8"
          />
          <rect
            x={headX + 9}
            y="71"
            width={headWidth - 18}
            height="40"
            rx="19"
            fill={paint("visor")}
            stroke="#436a80"
            strokeWidth="2"
          />
          <circle
            cx="103"
            cy="91"
            r="17"
            fill={paint("lens")}
            stroke="var(--robot-accent)"
            strokeWidth="2"
          />
          <circle
            cx="145"
            cy="91"
            r="17"
            fill={paint("lens")}
            stroke="var(--robot-accent)"
            strokeWidth="2"
          />
          <path d="M120 90h8" stroke="#a8dcea" strokeWidth="3" />
          <path
            d="M92 81q6-6 11-5M134 81q6-6 11-5"
            stroke="#ecffff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".62"
          />
          <g className="agent-robot__eyes" fill="#c9faff">
            <rect x="101" y="87" width="5" height="9" rx="2.5" />
            <rect x="143" y="87" width="5" height="9" rx="2.5" />
          </g>
          <path
            d="M117 114q7 5 14 0"
            stroke="#3e6e87"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M85 115h6m65 0h6"
            stroke="var(--robot-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".8"
          />
          {role === "jessica" && (
            <g>
              <path
                d="M68 91V79q0-30 28-34"
                stroke="#253f51"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <rect
                x="62"
                y="84"
                width="12"
                height="23"
                rx="6"
                fill="var(--robot-accent)"
              />
              <path d="M68 104q-1 16 23 19" stroke="#527a90" strokeWidth="3" />
              <rect
                x="88"
                y="119"
                width="15"
                height="7"
                rx="3.5"
                fill="#152c3c"
                stroke="var(--robot-accent)"
              />
            </g>
          )}
          {role === "alex" && (
            <path
              d="M81 57l6-9h15M154 55l9 8"
              stroke="var(--robot-accent)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          )}
          {role === "atlas" && (
            <g>
              <path d="M68 68 55 61" stroke="#7c9dad" strokeWidth="3" />
              <path
                d="M48 53q-7 13 8 19Z"
                fill={paint("pearl")}
                stroke="#77bcd2"
              />
              <circle cx="58" cy="58" r="3" fill="var(--robot-accent)" />
            </g>
          )}
          {role === "mason" && (
            <path
              d="M96 57q26-17 54 0l-3 8q-23-7-48 0Z"
              fill={paint("steel")}
              stroke="#6f91a5"
            />
          )}
        </g>
      </g>

      {role === "jessica" && (
        <g className="agent-robot__chat">
          <path
            d="M183 51h45q9 0 9 9v22q0 9-9 9h-25l-14 10 2-10h-8q-9 0-9-9V60q0-9 9-9Z"
            fill="#102936"
            stroke="var(--robot-accent)"
            strokeOpacity=".8"
          />
          {[190, 205, 220].map((x, i) => (
            <circle
              className={`agent-robot__chat-dot agent-robot__chat-dot--${i}`}
              key={x}
              cx={x}
              cy="72"
              r="3"
              fill="var(--robot-accent)"
            />
          ))}
          <path
            d="M30 136h23m-18 7h14"
            stroke="var(--robot-accent)"
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
                stroke="var(--robot-accent)"
                strokeOpacity=".45"
              />
              <path
                d={`M188 ${127 + n * 23}l3 3 5-6`}
                stroke="var(--robot-accent)"
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
            stroke="var(--robot-accent)"
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
            stroke="var(--robot-accent)"
            strokeOpacity=".35"
          />
          <path
            d="m186 146 16-13 17 13m-28-4v23h23v-23m-15 23v-12h8v12"
            stroke="var(--robot-accent)"
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
              fill="var(--robot-accent)"
              stroke="#d6fcff"
            />
          ))}
          <circle
            cx="41"
            cy="147"
            r="13"
            stroke="var(--robot-accent)"
            strokeOpacity=".45"
          />
          <path
            d="M35 149l4-7 5 11 4-8"
            stroke="var(--robot-accent)"
            strokeWidth="1.5"
          />
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
              fill="var(--robot-accent)"
              stroke="#285069"
            />
            <path d="m167 180 6-4-5-3Z" fill="#e3f9ff" />
          </g>
          <g className="agent-robot__approval">
            <circle
              cx="222"
              cy="189"
              r="13"
              fill="#102a32"
              stroke="var(--robot-accent)"
            />
            <path
              d="m216 189 4 4 8-9"
              stroke="var(--robot-accent)"
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
