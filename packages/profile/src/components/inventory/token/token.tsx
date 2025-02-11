import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  LayoutContainer,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CoinsIcon,
  ExternalIcon,
  Skeleton,
} from "@cartridge/ui-next";
import { useConnection } from "@/hooks/context";
import {
  formatAddress,
  isIframe,
  isPublicChain,
  StarkscanUrl,
  useCountervalue,
  useCreditBalance,
} from "@cartridge/utils";
import { constants } from "starknet";
import { formatEther } from "viem";
import { useAccount } from "@/hooks/account";
import { useToken } from "@/hooks/token";
import { TokenPair } from "@cartridge/utils/api/cartridge";
import { useMemo } from "react";
import { compare } from "compare-versions";
import { formatBalance } from "./helper";

export function Token() {
  const { address } = useParams<{ address: string }>();
  const location = useLocation();

  if (location.pathname.endsWith("/send")) {
    return <Outlet />;
  }

  switch (address) {
    case "credit":
      return <Credits />;
    default:
      return <ERC20 />;
  }
}

function Credits() {
  const navigate = useNavigate();
  const { chainId, openSettings, parent, isVisible } = useConnection();
  const { username } = useAccount();
  const credit = useCreditBalance({
    username,
    interval: isVisible ? 3000 : undefined,
  });

  return (
    <LayoutContainer>
      <LayoutHeader
        title={`${credit.balance.formatted} CREDITS`}
        description={`$${credit.balance.formatted}`}
        icon={<CoinsIcon variant="solid" size="lg" />}
        onBack={() => {
          navigate("..");
        }}
        chainId={chainId}
        openSettings={openSettings}
      />

      <LayoutContent className="pb-4">
        <Card>
          <CardContent className="flex items-center justify-between">
            <div className="text-foreground-400">
              Credits are used to pay for network activity. They are not tokens
              and cannot be transferred or refunded.
            </div>
          </CardContent>
        </Card>
      </LayoutContent>

      {isIframe() && (
        <LayoutFooter>
          <Button onClick={() => parent.openPurchaseCredits()}>Purchase</Button>
        </LayoutFooter>
      )}
    </LayoutContainer>
  );
}

function ERC20() {
  const navigate = useNavigate();
  const { address } = useParams<{ address: string }>();
  const { chainId, openSettings, version } = useConnection();
  const t = useToken({ tokenAddress: address! });
  const { countervalue } = useCountervalue(
    {
      balance: formatEther(t?.balance.value ?? 0n),
      pair: `${t?.meta.symbol}_USDC` as TokenPair,
    },
    { enabled: t && ["ETH", "STRK"].includes(t.meta.symbol) },
  );

  const compatibility = useMemo(() => {
    if (!version) return false;
    return compare(version, "0.5.6", ">=");
  }, [version]);

  if (!t) {
    return;
  }

  return (
    <LayoutContainer>
      <LayoutHeader
        title={`${
          t.balance === undefined ? (
            <Skeleton className="h-[20px] w-[120px] rounded" />
          ) : (
            formatBalance(t.balance.formatted, ["~"])
          )
        } ${t.meta.symbol}`}
        description={
          countervalue && `${formatBalance(countervalue.formatted, ["~"])}`
        }
        icon={
          <div className="rounded-full size-11 bg-background-300 flex items-center justify-center">
            <img
              className="w-10 h-10"
              src={t.meta.logoUrl ?? "/public/placeholder.svg"}
            />
          </div>
        }
        onBack={() => {
          navigate("..");
        }}
        chainId={chainId}
        openSettings={openSettings}
      />

      <LayoutContent className="pb-4">
        <Card>
          <CardHeader>
            <CardTitle>details</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-foreground-400">Contract</div>
            {isPublicChain(chainId) ? (
              <Link
                to={`${StarkscanUrl(
                  chainId as constants.StarknetChainId,
                ).contract(t.meta.address)} `}
                className="flex items-center gap-1 text-sm"
                target="_blank"
              >
                <div className="font-medium">
                  {formatAddress(t.meta.address, { size: "sm" })}
                </div>
                <ExternalIcon size="sm" />
              </Link>
            ) : (
              <div>{formatAddress(t.meta.address)}</div>
            )}
          </CardContent>

          <CardContent className="flex items-center justify-between">
            <div className="text-foreground-400">Token Standard</div>
            <div className="font-medium">ERC-20</div>
          </CardContent>
        </Card>
      </LayoutContent>

      {isIframe() && compatibility && (
        <LayoutFooter>
          <Link to="send">
            <Button className="w-full">Send</Button>
          </Link>
        </LayoutFooter>
      )}
    </LayoutContainer>
  );
}
