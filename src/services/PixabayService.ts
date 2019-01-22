export default class PixabayService {
  protected static URL =  'https://pixabay.com/api/';
  protected static KEY = '9656065-a4094594c34f9ac14c7fc4c39';

  public static fetch(tags: string[]) {
    return fetch(`${PixabayService.URL}?key=${PixabayService.KEY}&q=${tags.join('+')}&image_type=photo`);
  }
}
