import { CityInfo, Forecast } from '.';

export interface Weather {
    city: CityInfo;
    cnt?: number;
    cod?: string;
    list: Forecast[];
    message?: number;
}
