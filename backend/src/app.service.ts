import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }


  // getToken(): string {
  //   return 'Hello World!';
  // }



    
  getToken(code) {
    let res;
    try {
      res = this.httpService
        .post(
          `https://api.intra.42.fr/oauth/token?grant_type=authorization_code&client_id=u-s4t2ud-60026d8f6f4c6890bf2cf17be5596322421198fec6aca83e267965226aba757f&client_secret=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&code=${code}&redirect_uri=http://localhost:5173/&state`,
        )
        ?.pipe(map((response) => response?.data));
    } catch (error) {
      console.log(error);
    }

    return res;
  }
}
