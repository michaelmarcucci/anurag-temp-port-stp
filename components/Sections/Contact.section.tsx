import {
  BsSpotify,
  MdEmail,
  MdFilePresent,
  AiOutlineGithub,
  AiOutlineTwitter,
  FaDiscord,
  FaLinkedinIn,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Contact Me</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/michaelmarcucci" />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/MichaelMarcucc9"
        />

        <Icon icon={<MdEmail />} url="mailto:michaelmarcucci23@gmail.com" />

        <Icon icon={<FaLinkedinIn />} url="https://www.linkedin.com/in/michael-marcucci-1a577293/" />
        <Icon icon={<MdFilePresent />} url="" />

        {/* <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/31l2fev6wn2mtzclbpvzxis3x77q"
        /> */}
      </div>
    </div>
  );
};

export default Contact;
