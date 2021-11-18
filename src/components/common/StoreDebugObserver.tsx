/* eslint-disable no-console */
import React, { ReactElement } from "react";
// eslint-disable-next-line camelcase
import { useRecoilTransactionObserver_UNSTABLE, RecoilValue } from "recoil";

type TDebugInfo = {
  type: "atom" | "selector" | undefined;
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  subscribers: RecoilValue<unknown>[];
  deps: RecoilValue<unknown>[];
};

function StoreDebugObserver(): ReactElement {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    console.group("Snapshot");

    const nodes = [...snapshot.getNodes_UNSTABLE()];
    const debugInfos = nodes.reduce<TDebugInfo[]>((acc, node) => {
      const { type, subscribers, deps } = snapshot.getInfo_UNSTABLE(node);
      const { contents } = snapshot.getLoadable(node);

      return [
        ...acc,
        {
          type,
          key: node.key,
          value: contents,
          subscribers: [...subscribers.nodes],
          deps: [...deps]
        }
      ];
    }, []);

    console.table(debugInfos);
    console.groupEnd();
  });
  return <></>;
}

export default StoreDebugObserver;
