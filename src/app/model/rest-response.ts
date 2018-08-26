import {Link} from './link';

export class RestResponse {
  success: boolean;
  status: number;
  data: any;
  links: Link[];
  msg: string;
}