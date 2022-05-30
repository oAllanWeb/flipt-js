import type Context from './Context';
declare type EvaluationResponse<T extends Context = Context> = {
    entity_id: string;
    request_context: T;
    match: boolean;
    flag_key: string;
    segment_key: string;
    timestamp: string;
    value: string | null;
    request_duration_millis: number;
    request_id?: string;
};
export default EvaluationResponse;
//# sourceMappingURL=EvaluationResponse.d.ts.map