import { INodeType } from "@/interfaces/map";
import { BIG_NODE_TAG, SMALL_NODE_TAG } from "../constant/map";

export const NODE_LIST: INodeType[] = [
  {
    x: 1009,
    y: 603,
    name: "瑞金",
    nodeFlagSize: BIG_NODE_TAG
  },
  {
    x: 947,
    y: 625,
    name: "赣县",
    nodeFlagSize: SMALL_NODE_TAG,
    roadPoints: [
      {
        x: 998,
        y: 610
      },
      {
        x: 991,
        y: 614
      },
      {
        x: 987,
        y: 620
      },
      {
        x: 964,
        y: 634
      },
      {
        x: 956,
        y: 632
      }
    ],
    roadFlagPoint: [
      {
        startPoint: {
          x: 1009,
          y: 603,
        },
        endPoint: {
          x: 980,
          y: 628
        }
      },
      {
        startPoint: {
          x: 980,
          y: 628
        },
        endPoint: {
          x: 963,
          y: 633
        },
      },
      {
        startPoint: {
          x: 963,
          y: 633
        },
        endPoint: {
          x: 947,
          y: 627,
        },
      }
    ]
  },
  {
    x: 912,
    y: 625,
    name: "汝城",
    nodeFlagSize: SMALL_NODE_TAG,
    roadFlagPoint: [
      {
        startPoint: {
          x: 947,
          y: 627,
        },
        endPoint: {
          x: 928,
          y: 623
        }
      },
      {
        startPoint: {
          x: 928,
          y: 623
        },
        endPoint: {
          x: 912,
          y: 622
        }
      }
    ]
  },
  {
    x: 863,
    y: 629,
    name: "彬县",
    nodeFlagSize: SMALL_NODE_TAG,
    roadFlagPoint: [
      {
        startPoint: {
          x: 912,
          y: 622
        },
        endPoint: {
          x: 892,
          y: 635
        }
      },
      {
        startPoint: {
          x: 892,
          y: 635
        },
        endPoint: {
          x: 857,
          y: 632,
        }
      }
    ]
  },
  {
    x: 780,
    y: 625,
    name: "兴安",
    nodeFlagSize: SMALL_NODE_TAG,
    roadFlagPoint: [
      {
        startPoint: {
          x: 857,
          y: 632,
        },
        endPoint: {
          x: 815,
          y: 638
        }
      },
      {
        startPoint: {
          x: 815,
          y: 638
        },
        endPoint: {
          x: 780,
          y: 625,
        }
      }
    ]
  },
  {
    x: 707,
    y: 586,
    name: "通道芙蓉镇",
    nodeFlagSize: BIG_NODE_TAG,
    roadFlagPoint: [
      {
        startPoint: {
          x: 780,
          y: 625,
        },
        endPoint: {
          x: 748,
          y: 609
        }
      },
      {
        startPoint: {
          x: 748,
          y: 609
        },
        endPoint: {
          x: 707,
          y: 585,
        }
      }
    ]
  },
  {
    x: 664,
    y: 576,
    name: "黎平",
    nodeFlagSize: BIG_NODE_TAG,
    roadFlagPoint: [
      {
        startPoint: {
          x: 707,
          y: 585,
        },
        endPoint: {
          x: 685,
          y: 588
        }
      },
      {
        startPoint: {
          x: 685,
          y: 588
        },
        endPoint: {
          x: 664,
          y: 576,
        }
      }
    ]
  },
]