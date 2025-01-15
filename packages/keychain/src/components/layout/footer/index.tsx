import { forwardRef, memo, PropsWithChildren, useRef } from "react";
import { cn } from "@cartridge/ui-next";
import { Link } from "react-router-dom";

export function Footer({
  children,
  className,
  showCatridgeLogo,
}: PropsWithChildren & { className?: string; showCatridgeLogo?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full pt-4 left-0 bottom-0 bg-background",
        !showCatridgeLogo && "pb-4",
        className,
      )}
      ref={ref}
    >
      <div className="flex flex-col px-4 gap-2">{children}</div>

      {showCatridgeLogo && (
        <Link
          to="https://cartridge.gg"
          target="_blank"
          className="h-10 flex items-center justify-center gap-1 text-muted hover:text-primary"
        >
          <ControllerIcon />
          <div className="text-xs font-medium">by</div>
          <CartridgeLogo />
        </Link>
      )}
    </div>
  );
}

export const CartridgeLogo = memo(
  forwardRef<SVGSVGElement, { className?: string }>(
    ({ className, ...props }, forwardedRef) => (
      <svg
        viewBox="0 0 91 16"
        ref={forwardedRef}
        className={cn("h-4", className)}
        {...props}
      >
        <path
          d="M6.69571 6.47738V10.5864C6.6951 10.6111 6.6996 10.6357 6.70894 10.6586C6.71828 10.6816 6.73227 10.7024 6.75005 10.7198C6.76783 10.7373 6.78903 10.7511 6.81238 10.7602C6.83572 10.7694 6.86072 10.7738 6.88586 10.7732H12.7804V12.2733H7.076C6.97276 12.2858 6.86796 12.2756 6.76927 12.2433C6.67057 12.211 6.58048 12.1574 6.50557 12.0865L5.3647 10.96C5.29383 10.8858 5.24066 10.797 5.20906 10.7001C5.17746 10.6031 5.16821 10.5005 5.18198 10.3997V6.66415C5.16917 6.56274 5.1796 6.4598 5.2125 6.36285C5.2454 6.2659 5.29993 6.17741 5.37212 6.10382L6.50557 4.97733C6.58048 4.90642 6.67057 4.85285 6.76927 4.82053C6.86796 4.78822 6.97276 4.77798 7.076 4.79056H12.7804V6.2906H6.88586C6.86072 6.29 6.83572 6.29442 6.81238 6.30359C6.78903 6.31277 6.76783 6.3265 6.75005 6.34397C6.73227 6.36143 6.71828 6.38226 6.70894 6.40519C6.6996 6.42813 6.6951 6.45268 6.69571 6.47738Z"
          fill="currentColor"
        />
        <path
          d="M15.757 9.46894L19.3663 7.97019C19.6036 7.8562 19.8624 7.79239 20.1261 7.78284H21.0759C21.1012 7.78444 21.1264 7.78094 21.1502 7.77255C21.174 7.76417 21.1958 7.75107 21.2143 7.73408C21.2328 7.71709 21.2476 7.69655 21.2577 7.67373C21.2679 7.6509 21.2732 7.62627 21.2733 7.60135V6.47729C21.2739 6.45252 21.2694 6.42789 21.2601 6.40489C21.2508 6.38189 21.2368 6.361 21.219 6.34348C21.2013 6.32596 21.1801 6.31218 21.1568 6.30298C21.1334 6.29378 21.1085 6.28934 21.0834 6.28995H15.1886V4.78534H17.8481C18.1094 4.79386 18.3661 4.85565 18.602 4.96683L22.2112 6.46558C22.3862 6.55279 22.5325 6.68703 22.6333 6.85279C22.7342 7.01854 22.7854 7.20905 22.7811 7.4023V10.3998C22.7939 10.5015 22.7835 10.6048 22.7506 10.702C22.7178 10.7993 22.6633 10.888 22.5912 10.9618L21.4514 12.0859C21.3766 12.157 21.2866 12.2108 21.188 12.2432C21.0894 12.2756 20.9847 12.2859 20.8815 12.2732H17.0823C16.9792 12.2859 16.8745 12.2756 16.7759 12.2432C16.6773 12.2108 16.5873 12.157 16.5124 12.0859L15.3771 10.9677C15.305 10.8939 15.2505 10.8051 15.2176 10.7079C15.1848 10.6106 15.1744 10.5074 15.1872 10.4057C15.1829 10.2124 15.2341 10.0219 15.335 9.85614C15.4358 9.69039 15.5821 9.55616 15.757 9.46894ZM16.8968 10.7862H21.0759C21.101 10.7868 21.126 10.7824 21.1493 10.7732C21.1727 10.764 21.1939 10.7502 21.2116 10.7327C21.2294 10.7152 21.2433 10.6943 21.2527 10.6713C21.262 10.6483 21.2665 10.6236 21.2659 10.5989V9.47479C21.2665 9.45003 21.262 9.42539 21.2527 9.40239C21.2433 9.37939 21.2294 9.3585 21.2116 9.34098C21.1939 9.32346 21.1727 9.30969 21.1493 9.30049C21.126 9.29128 21.101 9.28685 21.0759 9.28745H16.8968C16.8717 9.28685 16.8467 9.29128 16.8234 9.30049C16.8001 9.30969 16.7789 9.32346 16.7611 9.34098C16.7434 9.3585 16.7294 9.37939 16.7201 9.40239C16.7107 9.42539 16.7062 9.45003 16.7068 9.47479V10.5989C16.707 10.6231 16.7121 10.6471 16.7218 10.6695C16.7315 10.6918 16.7456 10.712 16.7633 10.7289C16.781 10.7457 16.8019 10.759 16.8248 10.7678C16.8477 10.7767 16.8722 10.7809 16.8968 10.7803V10.7862Z"
          fill="currentColor"
        />
        <path
          d="M56.6067 12.2785H49.0021V10.7807H51.8538C51.879 10.7813 51.904 10.7769 51.9273 10.7677C51.9507 10.7586 51.9719 10.7448 51.9896 10.7274C52.0074 10.71 52.0214 10.6892 52.0307 10.6663C52.0401 10.6434 52.0446 10.6189 52.044 10.5942V6.49133C52.0446 6.46667 52.0401 6.44215 52.0307 6.41925C52.0214 6.39636 52.0074 6.37556 51.9896 6.35812C51.9719 6.34068 51.9507 6.32697 51.9273 6.31781C51.904 6.30865 51.879 6.30423 51.8538 6.30483H47.705L49.233 4.84281L51.6637 4.81288C51.767 4.80032 51.8717 4.81055 51.9704 4.84281C52.0691 4.87508 52.1592 4.92857 52.2341 4.99937L53.3748 6.11834C53.4469 6.19181 53.5015 6.28017 53.5344 6.37697C53.5673 6.47377 53.5777 6.57656 53.5649 6.67782V10.5942C53.5643 10.6189 53.5688 10.6434 53.5781 10.6663C53.5874 10.6892 53.6014 10.71 53.6192 10.7274C53.637 10.7448 53.6582 10.7586 53.6815 10.7677C53.7049 10.7769 53.7299 10.7813 53.755 10.7807H56.6067V12.2785ZM53.5649 1.83334V3.3253H52.044V1.82751L53.5649 1.83334Z"
          fill="currentColor"
        />
        <path
          d="M60.1113 12.2734C60.0084 12.2858 59.904 12.2755 59.8056 12.2433C59.7073 12.211 59.6175 12.1577 59.5429 12.0871L58.403 10.9634C58.3309 10.89 58.2764 10.8018 58.2435 10.7051C58.2106 10.6084 58.2002 10.5057 58.213 10.4045V7.42376C58.2086 7.23174 58.2596 7.0424 58.3602 6.87759C58.4608 6.71278 58.6068 6.5792 58.7815 6.49227L62.3926 4.99605C62.6299 4.8827 62.8888 4.81924 63.1525 4.80975H64.1024C64.1276 4.81015 64.1526 4.80556 64.176 4.79625C64.1993 4.78693 64.2205 4.7731 64.2382 4.75556C64.256 4.73803 64.2699 4.71715 64.2792 4.6942C64.2885 4.67125 64.293 4.64669 64.2924 4.622V1.82751H65.8123V12.2734H60.1113ZM64.2924 10.5967V6.49227C64.293 6.46764 64.2885 6.44314 64.2792 6.42027C64.2699 6.3974 64.2559 6.37662 64.2381 6.3592C64.2204 6.34178 64.1992 6.32808 64.1759 6.31893C64.1525 6.30978 64.1276 6.30537 64.1024 6.30597H59.9229C59.8977 6.30537 59.8728 6.30978 59.8494 6.31893C59.8261 6.32808 59.8049 6.34178 59.7872 6.3592C59.7694 6.37662 59.7554 6.3974 59.7461 6.42027C59.7368 6.44314 59.7323 6.46764 59.7329 6.49227V10.5908C59.7323 10.6155 59.7368 10.64 59.7461 10.6628C59.7554 10.6857 59.7694 10.7065 59.7872 10.7239C59.8049 10.7413 59.8261 10.755 59.8494 10.7642C59.8728 10.7733 59.8977 10.7777 59.9229 10.7771H64.1024C64.1276 10.7777 64.1525 10.7733 64.1759 10.7642C64.1992 10.755 64.2204 10.7413 64.2381 10.7239C64.2559 10.7065 64.2699 10.6857 64.2792 10.6628C64.2885 10.64 64.293 10.6155 64.2924 10.5908V10.5967Z"
          fill="currentColor"
        />
        <path
          d="M75.8115 6.65487V12.6263C75.8158 12.8186 75.7646 13.0082 75.6639 13.1732C75.5631 13.3381 75.4169 13.4717 75.2422 13.5585L71.6365 15.0499C71.3994 15.1632 71.1408 15.2267 70.8774 15.2363H68.219V13.7391H74.1035C74.1286 13.7397 74.1536 13.7352 74.1769 13.7261C74.2002 13.7169 74.2213 13.7032 74.2391 13.6858C74.2568 13.6684 74.2708 13.6476 74.2801 13.6247C74.2894 13.6018 74.2939 13.5773 74.2933 13.5526V12.4341C74.2939 12.4094 74.2894 12.3849 74.2801 12.362C74.2708 12.3391 74.2568 12.3184 74.2391 12.3009C74.2213 12.2835 74.2002 12.2698 74.1769 12.2606C74.1536 12.2515 74.1286 12.2471 74.1035 12.2477H73.1547C72.8912 12.2383 72.6325 12.1748 72.3956 12.0612L68.7898 10.5698C68.6148 10.4832 68.4683 10.3497 68.3673 10.1848C68.2663 10.0198 68.2149 9.83015 68.219 9.63769V6.65487C68.2062 6.55365 68.2166 6.4509 68.2495 6.35413C68.2823 6.25737 68.3368 6.16904 68.4088 6.09559L69.5489 4.97704C69.6234 4.9062 69.713 4.85268 69.8113 4.82041C69.9096 4.78815 70.014 4.77796 70.1168 4.79061H73.9138C74.0168 4.77805 74.1214 4.78828 74.2199 4.82053C74.3184 4.85279 74.4083 4.90626 74.4831 4.97704L75.6217 6.09559C75.6954 6.16791 75.751 6.25611 75.7839 6.3532C75.8169 6.45028 75.8263 6.55357 75.8115 6.65487ZM74.1035 6.28202H69.927C69.9019 6.28142 69.877 6.28583 69.8537 6.29499C69.8304 6.30414 69.8092 6.31786 69.7915 6.33529C69.7737 6.35272 69.7598 6.37351 69.7504 6.3964C69.7411 6.41929 69.7366 6.4438 69.7372 6.46844V10.5698C69.7366 10.5945 69.7411 10.619 69.7504 10.6419C69.7598 10.6648 69.7737 10.6855 69.7915 10.703C69.8092 10.7204 69.8304 10.7341 69.8537 10.7433C69.877 10.7524 69.9019 10.7568 69.927 10.7562H74.1035C74.1286 10.7568 74.1536 10.7524 74.1769 10.7433C74.2002 10.7341 74.2213 10.7204 74.2391 10.703C74.2568 10.6855 74.2708 10.6648 74.2801 10.6419C74.2894 10.619 74.2939 10.5945 74.2933 10.5698V6.46844C74.2939 6.4438 74.2894 6.41929 74.2801 6.3964C74.2708 6.37351 74.2568 6.35272 74.2391 6.33529C74.2213 6.31786 74.2002 6.30414 74.1769 6.29499C74.1536 6.28583 74.1286 6.28142 74.1035 6.28202Z"
          fill="currentColor"
        />
        <path
          d="M85.2518 7.60219L81.6427 9.09276C81.4056 9.20657 81.1469 9.27028 80.8832 9.27981H79.9369C79.9118 9.27921 79.8868 9.28364 79.8635 9.29283C79.8402 9.30201 79.819 9.31577 79.8012 9.33326C79.7835 9.35075 79.7695 9.37161 79.7602 9.39458C79.7509 9.41754 79.7464 9.44213 79.747 9.46686V10.5892C79.7464 10.6139 79.7509 10.6385 79.7602 10.6615C79.7695 10.6844 79.7835 10.7053 79.8012 10.7228C79.819 10.7403 79.8402 10.754 79.8635 10.7632C79.8868 10.7724 79.9118 10.7768 79.9369 10.7762H85.8243V12.2785H83.1617C82.8981 12.269 82.6394 12.2052 82.4022 12.0914L78.7947 10.5892C78.6198 10.5021 78.4736 10.3681 78.3728 10.2026C78.272 10.0371 78.2208 9.84687 78.2251 9.65391V6.66109C78.2123 6.55953 78.2227 6.45643 78.2555 6.35934C78.2884 6.26225 78.3428 6.17362 78.4149 6.09993L79.5541 4.97763C79.6289 4.90661 79.7189 4.85296 79.8175 4.8206C79.916 4.78823 80.0207 4.77798 80.1238 4.79057H83.9212C84.0245 4.77796 84.1294 4.78821 84.2282 4.82057C84.327 4.85292 84.4172 4.90658 84.4923 4.97763L85.6315 6.09993C85.8214 6.28699 85.8214 6.42727 85.8214 6.66109C85.8268 6.85502 85.7761 7.04648 85.6752 7.21311C85.5744 7.37974 85.4275 7.51468 85.2518 7.60219ZM84.111 6.28699H79.9369C79.9118 6.28638 79.8868 6.29081 79.8635 6.3C79.8402 6.30919 79.819 6.32294 79.8012 6.34043C79.7835 6.35792 79.7695 6.37878 79.7602 6.40175C79.7509 6.42472 79.7464 6.44931 79.747 6.47404V7.60219C79.7464 7.62692 79.7509 7.65151 79.7602 7.67448C79.7695 7.69744 79.7835 7.7183 79.8012 7.73579C79.819 7.75328 79.8402 7.76704 79.8635 7.77623C79.8868 7.78542 79.9118 7.78984 79.9369 7.78924H84.114C84.1392 7.78984 84.1642 7.78541 84.1876 7.77624C84.211 7.76707 84.2323 7.75334 84.2501 7.73587C84.268 7.7184 84.2821 7.69756 84.2916 7.67458C84.3011 7.65161 84.3058 7.62699 84.3054 7.60219V6.47988C84.3066 6.45435 84.3025 6.42883 84.2932 6.40497C84.2839 6.3811 84.2696 6.35941 84.2513 6.34126C84.2331 6.32311 84.2111 6.30891 84.187 6.29957C84.1628 6.29023 84.137 6.28594 84.111 6.28699Z"
          fill="currentColor"
        />
        <path
          d="M47.4012 4.79056H43.1565C43.0505 4.77796 42.9428 4.78822 42.8414 4.82059C42.74 4.85295 42.6474 4.9066 42.5704 4.97761L41.3982 6.09992C41.3241 6.17362 41.268 6.26225 41.2342 6.35933C41.2004 6.45642 41.1897 6.55952 41.2029 6.66108V12.2785H42.7658V6.47403C42.7652 6.4493 42.7698 6.42471 42.7794 6.40174C42.789 6.37878 42.8034 6.35792 42.8216 6.34043C42.8399 6.32294 42.8617 6.30918 42.8857 6.29999C42.9097 6.2908 42.9353 6.28638 42.9612 6.28698H45.8382L47.4012 4.79056Z"
          fill="currentColor"
        />
        <path
          d="M36.3363 6.3051H39.1963V4.81306H36.3363C36.3107 4.81506 36.2848 4.81156 36.2607 4.8028C36.2365 4.79404 36.2146 4.78023 36.1964 4.76234C36.1783 4.74445 36.1643 4.7229 36.1556 4.6992C36.1468 4.67549 36.1434 4.6502 36.1457 4.62509V1.82751H34.6204V4.62509C34.6226 4.6502 34.6193 4.67549 34.6105 4.6992C34.6017 4.7229 34.5878 4.74445 34.5696 4.76234C34.5515 4.78023 34.5296 4.79404 34.5054 4.8028C34.4812 4.81156 34.4554 4.81506 34.4297 4.81306H32.7212L31.1915 6.3051H34.4297C34.4553 6.30312 34.481 6.30659 34.505 6.31527C34.5291 6.32394 34.5509 6.33762 34.569 6.35534C34.5871 6.37307 34.6011 6.39443 34.61 6.41796C34.6189 6.44148 34.6224 6.46661 34.6204 6.4916V10.4082C34.6061 10.5092 34.6154 10.612 34.6477 10.7089C34.6799 10.8058 34.7343 10.8943 34.8066 10.9677L35.9505 12.0868C36.0257 12.1576 36.116 12.2111 36.215 12.2433C36.3139 12.2756 36.419 12.2858 36.5225 12.2733H39.1918V10.7812H36.3319C36.3067 10.7818 36.2816 10.7774 36.2582 10.7682C36.2348 10.7591 36.2135 10.7454 36.1957 10.7279C36.1779 10.7105 36.1638 10.6897 36.1545 10.6668C36.1451 10.6439 36.1406 10.6194 36.1412 10.5947V6.4916C36.1391 6.46621 36.1427 6.44067 36.1519 6.41681C36.161 6.39294 36.1754 6.37134 36.194 6.35353C36.2126 6.33572 36.235 6.32215 36.2596 6.31378C36.2842 6.30541 36.3104 6.30244 36.3363 6.3051Z"
          fill="currentColor"
        />
        <path
          d="M30.9913 4.79109H27.0772C26.9755 4.77795 26.8721 4.78739 26.7746 4.81873C26.677 4.85007 26.5877 4.90251 26.513 4.97228L25.3817 6.09451C25.3101 6.1682 25.256 6.25682 25.2234 6.3539C25.1907 6.45098 25.1804 6.55407 25.1931 6.65563V12.2785H26.7016V6.47443C26.701 6.44971 26.7054 6.42512 26.7147 6.40215C26.724 6.37919 26.7378 6.35833 26.7555 6.34084C26.7731 6.32335 26.7941 6.3096 26.8173 6.30041C26.8404 6.29122 26.8652 6.28679 26.8901 6.2874H29.4843L30.9913 4.79109Z"
          fill="currentColor"
        />
      </svg>
    ),
  ),
);

const ControllerIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6"
  >
    <path
      d="M29.9624 15.6199H34.0374V20.3101H29.9624V15.6199Z"
      fill="currentColor"
    />
    <path
      d="M24.0364 44.3695H16.4368C15.9359 44.3695 15.9359 43.8659 15.9359 43.8659V24.8189C15.9359 24.8189 15.9359 24.32 16.4368 24.32H29.9623L29.9624 20.3101H24.9897C24.9897 20.3101 23.9832 20.3101 22.9767 20.809L13.4173 24.8189C12.4108 25.3178 11.9099 26.3249 11.9099 27.3227V43.3624C11.9099 43.8659 11.9099 44.3648 12.4108 44.8684L15.4303 47.8758C15.9312 48.3794 16.3104 48.3794 16.9377 48.3794H24.0375C24.038 47.1606 24.0386 45.7207 24.0391 44.3973H39.7827V48.3794H47.0623C47.6896 48.3794 48.0688 48.3794 48.5697 47.8758L51.5892 44.8684C52.0901 44.3695 52.0901 43.8659 52.0901 43.3624V27.3227C52.0901 26.3203 51.5892 25.3178 50.5827 24.8189L41.0233 20.809C40.0169 20.3101 39.0104 20.3101 39.0104 20.3101H34.0374L34.0374 24.32H47.5679C48.0688 24.32 48.0688 24.8189 48.0688 24.8189V43.8659C48.0688 43.8659 48.0688 44.3695 47.5679 44.3695H39.7978V40.4158H24.0403C24.0403 40.7994 24.0368 44.0341 24.0364 44.3695Z"
      fill="currentColor"
    />
    <path
      d="M24.0364 34.2617H39.7978V30.2802H24.0403C24.0403 30.687 24.0364 34.2992 24.0364 34.2617Z"
      fill="currentColor"
    />
  </svg>
);
