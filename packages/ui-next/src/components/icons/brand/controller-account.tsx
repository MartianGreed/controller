import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
import { IconProps } from "../types";

export const ControllerAccountIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, ...props }, forwardedRef) => (
      <svg
        viewBox="0 0 24 24"
        className={iconVariants({ size, className })}
        ref={forwardedRef}
        {...props}
      >
        <path
          d="M11.0872 4.66211H12.9127V6.76323H11.0872V4.66211Z"
          className="fill-current"
        />
        <path
          d="M8.43245 17.5414H5.02796C4.80357 17.5414 4.80357 17.3158 4.80357 17.3158V8.7831C4.80357 8.7831 4.80357 8.5596 5.02796 8.5596H11.0872L11.0872 6.76323H8.85949C8.85949 6.76323 8.4086 6.76323 7.95771 6.98673L3.67529 8.7831C3.2244 9.0066 3 9.45778 3 9.90478V17.0902C3 17.3158 3 17.5393 3.2244 17.7649L4.57707 19.1122C4.80147 19.3378 4.97134 19.3378 5.25236 19.3378H8.43296C8.43317 18.7918 8.43342 18.1467 8.43364 17.5539H15.4865V19.3378H18.7476C19.0287 19.3378 19.1985 19.3378 19.4229 19.1122L20.7756 17.7649C21 17.5414 21 17.3158 21 17.0902V9.90478C21 9.45569 20.7756 9.0066 20.3247 8.7831L16.0423 6.98673C15.5914 6.76323 15.1405 6.76323 15.1405 6.76323H12.9127L12.9127 8.5596H18.9741C19.1985 8.5596 19.1985 8.7831 19.1985 8.7831V17.3158C19.1985 17.3158 19.1985 17.5414 18.9741 17.5414H15.4933V15.7702H8.43421C8.43421 15.9421 8.43263 17.3912 8.43245 17.5414Z"
          className="fill-current"
        />
        <path
          d="M8.43243 13.0133H15.4933V11.2297H8.43421C8.43421 11.4119 8.43243 13.0301 8.43243 13.0133Z"
          className="fill-current"
        />
      </svg>
    ),
  ),
);

ControllerAccountIcon.displayName = "ControllerAccountIcon";
