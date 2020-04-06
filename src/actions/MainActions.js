export const GET_RECORDS_REQUEST = "GET_RECORDS_REQUEST";
export const RECORDS_RESPONSE = "RECORDS_RESPONSE";
export const RESPONSE_FAIL = "RESPONSE_FAIL";

export function getHomeLoan(homeloanList) {
    return {
        type: RECORDS_RESPONSE,
         homeloanList
    }
}

