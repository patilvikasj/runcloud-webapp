import { useState } from "react";

export default function Form() {

    const [ isSiteCreationInProgress, setIsSiteCreationInProgress ] = useState( false );
    const [ siteUrl, setsiteUrl ] = useState( '' );

  const CreateSite = ( e ) => {
    e.preventDefault();
    const oath_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzOTUiLCJqdGkiOiJjMmJkMTcxYTRmZDkwMGEzNTQ5ZGE4MWJlNzBlYWE4NzQ3MTg4ZTRmNmM1MjA2NDIyZTY4NGUyODEwNGZlMGYyODVlMDZmYzYyZTA4MDkyNSIsImlhdCI6MTY4MTI3NjExOC42NjEyMDcsIm5iZiI6MTY4MTI3NjExOC42NjEyMDksImV4cCI6MTcxMjg5ODUxOC42NDg2MzEsInN1YiI6IjEwMTk0Iiwic2NvcGVzIjpbXX0.lYGNj9r52-POBlDp7mj4XBFeJIr34Nm2iPKvm0BU1n7GBJjuBHGghYK2WlLyH5dhaQ7GQ5jBtZi3nAI4-tOw6jsD1N-gC96c56zZfvooJAPnSTWMrL1YimgkubnLaPZQT1-yqEz3rrZF7EQa0L__fVftfVdsmwoFxvq4Idv6hf5F8p06rSYucRf42Wuyxqw20hRFyIMesKPsohNB559a7oonmQ0dqQNfhEN6G9rjMFHGzj-31_9rGx6z5Nn-YCB10jyo7vqzFXtgvnXcPvONydYUnBEjCiSNb-vqVq3tYd3KfFHtsMDCA4Dv9BtahtK4UP-jXcPGn-44irfCxpgkHuNnXXd4aJ8HBbHf_9Bf8_UzNcDZN406JiUZ3aHR0p48GYS1wjs0wKBncAkzj7OaAyW2yLLF1tz6IJstHdvD_QNRCBqcIHgl6wIWnxTHR7Ot08yGcb98crgOavF83Aq4YH6ltPNghM3tffMv-4mZdCOYx6Ig349J8Z6mU5M2k15lu8p8jZmmryV_DDm8Y3W7QOcoG08sLjbsxtdpFwkloK-udbQhwxUmuxI87LXskRFNdvbYt-qUjtaNIxX518A8oLG_97pjVpVFjD6Wq0XGntwTDuwOLNY7xDD5U1u6fdfVxWyCdtcLr6T_5GzgXysd-E0o_uVI96Gxdyis7F1i69k";

    setIsSiteCreationInProgress( true );

    const domain_url = siteUrl + ".powerfuldocs.com";

    var raw = JSON.stringify({
      url: domain_url,
      server_id: 33386,
      php_version: "7.4",
      pm: "ondemand",
      dns_integration_id: 11947,
      dns_management: "cloudflare_full",
      nginx_caching: "fastcgi",
      username: "patilvikasj",
      wp_users: [
        {
          username: "vikasp",
          email: "patilvikasj@gmail.com",
          password: "Aftermath88#",
          role: "administrator",
        },
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${oath_token}`
      },
      body: raw,
      redirect: "follow",
    };

    fetch("https://my.gridpane.com/oauth/api/v1/site", requestOptions)
      .then((response) => {
        console.log( response );
        response.text()
      })
      .then((result) => {
        console.log(result);
        setIsSiteCreationInProgress( false );
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Create your WordPress site
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="site_url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Site URL
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="site_url"
                    id="site_url"
                    autoComplete="site_url"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={siteUrl}
                    onChange={e => setsiteUrl(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        { ! isSiteCreationInProgress && 
            <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={CreateSite}
            >
            Create Site
            </button>
        }

        { isSiteCreationInProgress && 
            <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
            >
        </div>
            }

      </div>
    </form>
  );
}
