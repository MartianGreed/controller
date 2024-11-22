import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
import { StateIconProps } from "../types";

export const CheckboxIcon = memo(
  forwardRef<
    SVGSVGElement,
    Omit<StateIconProps, "variant"> & {
      variant:
        | StateIconProps["variant"]
        | "minus-solid"
        | "minus-line"
        | "unchecked-solid"
        | "unchecked-line";
    }
  >(({ className, size, variant, ...props }, forwardedRef) => (
    <svg
      viewBox="0 0 24 24"
      className={iconVariants({ size, className })}
      ref={forwardedRef}
      {...props}
    >
      {(() => {
        switch (variant) {
          case "solid":
            return (
              <path
                d="M6.28571 4C5.025 4 4 5.025 4 6.28571V17.7143C4 18.975 5.025 20 6.28571 20H17.7143C18.975 20 20 18.975 20 17.7143V6.28571C20 5.025 18.975 4 17.7143 4H6.28571ZM16.0357 10.3214L11.4643 14.8929C11.1286 15.2286 10.5857 15.2286 10.2536 14.8929L7.96786 12.6071C7.63214 12.2714 7.63214 11.7286 7.96786 11.3964C8.30357 11.0643 8.84643 11.0607 9.17857 11.3964L10.8571 13.075L14.8214 9.10714C15.1571 8.77143 15.7 8.77143 16.0321 9.10714C16.3643 9.44286 16.3679 9.98571 16.0321 10.3179L16.0357 10.3214Z"
                className="fill-current"
              />
            );
          case "line":
            return (
              <>
                <path
                  d="M6.28571 5.14286C5.65357 5.14286 5.14286 5.65357 5.14286 6.28571V17.7143C5.14286 18.3464 5.65357 18.8571 6.28571 18.8571H17.7143C18.3464 18.8571 18.8571 18.3464 18.8571 17.7143V6.28571C18.8571 5.65357 18.3464 5.14286 17.7143 5.14286H6.28571ZM4 6.28571C4 5.025 5.025 4 6.28571 4H17.7143C18.975 4 20 5.025 20 6.28571V17.7143C20 18.975 18.975 20 17.7143 20H6.28571C5.025 20 4 18.975 4 17.7143V6.28571Z"
                  className="fill-muted-foreground"
                />
                <path
                  d="M11.2607 14.6893L15.8322 10.1179C16.0536 9.89644 16.0536 9.53215 15.8322 9.31072C15.6107 9.0893 15.2464 9.0893 15.025 9.31072L10.8572 13.4786L8.97502 11.5964C8.75359 11.375 8.3893 11.375 8.16787 11.5964C7.94644 11.8179 7.94644 12.1822 8.16787 12.4036L10.4536 14.6893C10.675 14.9107 11.0393 14.9107 11.2607 14.6893Z"
                  className="fill-current"
                />
              </>
            );
          case "minus-solid":
            return (
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M4 6.28571C4 5.025 5.025 4 6.28571 4H17.7143C18.975 4 20 5.025 20 6.28571V17.7143C20 18.975 18.975 20 17.7143 20H6.28571C5.025 20 4 18.975 4 17.7143V6.28571ZM7.75 11.1C7.33579 11.1 7 11.5029 7 12C7 12.497 7.33579 12.9 7.75 12.9H16.25C16.6642 12.9 17 12.497 17 12C17 11.5029 16.6642 11.1 16.25 11.1H7.75Z"
                className="fill-current"
              />
            );
          case "minus-line":
            return (
              <>
                <path
                  d="M6.28571 5.14286C5.65357 5.14286 5.14286 5.65357 5.14286 6.28571V17.7143C5.14286 18.3464 5.65357 18.8571 6.28571 18.8571H17.7143C18.3464 18.8571 18.8571 18.3464 18.8571 17.7143V6.28571C18.8571 5.65357 18.3464 5.14286 17.7143 5.14286H6.28571ZM4 6.28571C4 5.025 5.025 4 6.28571 4H17.7143C18.975 4 20 5.025 20 6.28571V17.7143C20 18.975 18.975 20 17.7143 20H6.28571C5.025 20 4 18.975 4 17.7143V6.28571Z"
                  className="fill-muted-foreground"
                />
                <path
                  d="M7 12C7 11.5858 7.33579 11.25 7.75 11.25H16.25C16.6642 11.25 17 11.5858 17 12C17 12.4142 16.6642 12.75 16.25 12.75H7.75C7.33579 12.75 7 12.4142 7 12Z"
                  className="fill-current"
                />
              </>
            );
          case "unchecked-solid":
            return (
              <path
                d="M6.28571 4C5.025 4 4 5.025 4 6.28571V17.7143C4 18.975 5.025 20 6.28571 20H17.7143C18.975 20 20 18.975 20 17.7143V6.28571C20 5.025 18.975 4 17.7143 4H6.28571Z"
                className="fill-current"
              />
            );
          case "unchecked-line":
            return (
              <path
                d="M6.28571 5.14286C5.65357 5.14286 5.14286 5.65357 5.14286 6.28571V17.7143C5.14286 18.3464 5.65357 18.8571 6.28571 18.8571H17.7143C18.3464 18.8571 18.8571 18.3464 18.8571 17.7143V6.28571C18.8571 5.65357 18.3464 5.14286 17.7143 5.14286H6.28571ZM4 6.28571C4 5.025 5.025 4 6.28571 4H17.7143C18.975 4 20 5.025 20 6.28571V17.7143C20 18.975 18.975 20 17.7143 20H6.28571C5.025 20 4 18.975 4 17.7143V6.28571Z"
                className="fill-muted-foreground"
              />
            );
        }
      })()}
    </svg>
  )),
);

CheckboxIcon.displayName = "CheckboxIcon";
