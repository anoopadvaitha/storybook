import { InfiniteScrollProps } from 'grommet';
export interface IProps {
    props?: InfiniteScrollProps;
    step?: InfiniteScrollProps['step'];
}
export declare const onMore: {
    (): JSX.Element;
    storyName: string;
};
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "on-more": {
                    startLoc: {
                        col: number;
                        line: number;
                    };
                    endLoc: {
                        col: number;
                        line: number;
                    };
                    startBody: {
                        col: number;
                        line: number;
                    };
                    endBody: {
                        col: number;
                        line: number;
                    };
                };
            };
        };
    };
    title: string;
};
export default _default;
