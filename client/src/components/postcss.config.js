import { append } from 'express/lib/response'
import postcss from 'postcss';

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
export default postcss;
export const USER_SERVER = '/api/users';
