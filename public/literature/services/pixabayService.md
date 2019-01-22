- Book 9: The AJAX Service

Please pardon brevity - time is short now ...
[services/PixabayService.ts](#The-Image-Service "save:")


## The Image Service

```ts
export default class PixabayService {
  protected static URL =  'https://pixabay.com/api/';
  protected static KEY = '9656065-a4094594c34f9ac14c7fc4c39';

  public static fetch(tags: string[]) {
    return fetch(`${PixabayService.URL}?key=${PixabayService.KEY}&q=${tags.join('+')}&image_type=photo`);
  }
}

```
