import React from "react";

import { Img, Text, Button, Stack, List, Input, Line } from "components";

const HomePagePage = () => {
  return (
    <>
      <div className="flex flex-col font-quicksand items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="bg-lime_100 flex flex-col h-[72px] sm:h-[auto] items-center justify-center max-w-[1440px] sm:px-[20px] md:px-[40px] px-[64px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[32px] sm:gap-[32px] items-center justify-between max-w-[1312px] ml-[auto] mr-[auto] self-stretch w-[100%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_logopng1.png"
                  className="h-[60px] sm:h-[auto] object-cover w-[100%]"
                  alt="LogoPNGOne"
                />
              </div>
              <div className="bg-lime_100 flex flex-row gap-[32px] items-center justify-center md:w-[100%] sm:w-[100%] w-[auto]">
                <ul className="flex flex-row gap-[32px] sm:hidden items-start justify-start w-[auto] common-row-list">
                  <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-bold text-[16px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-bold text-[16px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Product
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-bold text-[16px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      About
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-bold text-[16px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="flex flex-col items-center justify-center w-[auto]">
                  <div className="flex flex-row gap-[8px] h-[45px] sm:h-[auto] items-center justify-center outline outline-[2px] outline-gray_900 px-[20px] py-[8px] rounded-radius22 md:w-[100%] sm:w-[100%] w-[125px]">
                    <Text
                      className="font-bold text-gray_900 text-left md:tracking-ls1 sm:tracking-ls1 tracking-ls16 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Cart
                    </Text>
                    <Text
                      className="font-bold text-left text-yellow_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls16 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      0
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="bg-lime_100 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] h-[900px] sm:h-[auto] items-center justify-start max-w-[1440px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start md:pl-[20px] sm:pl-[20px] pl-[80px] md:pr-[20px] sm:pr-[20px] pr-[60px] sm:px-[20px] md:px-[40px] md:self-stretch sm:self-stretch w-[100%]">
              <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[100%]">
                <Text
                  className="font-russoone leading-[120.00%] max-w-[580px] not-italic self-stretch text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                  as="h1"
                  variant="h1"
                >
                  Medium length hero headline goes here
                </Text>
                <Text
                  className="font-normal font-quicksand leading-[150.00%] max-w-[580px] not-italic self-stretch text-gray_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                  as="h5"
                  variant="h5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pt-[16px] md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="cursor-pointer font-bold text-[16px] text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls16 w-[185px]"
                  shape="RoundedBorder29"
                  size="md"
                  variant="OutlineBlack9002d"
                >
                  Start Looking
                </Button>
              </div>
            </div>
            <Img
              src="images/img_placeholderimage.png"
              className="flex-1 h-[900px] sm:h-[auto] object-cover md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[200px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[50%]"
              alt="PlaceholderImage"
            />
          </div>
          <Stack className="h-[1644px] relative w-[100%]">
            <div className="absolute bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] inset-x-[0] items-center justify-center max-w-[1440px] mx-[auto] sm:px-[20px] md:px-[40px] px-[64px] py-[112px] top-[0] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[394px] md:gap-[40px] sm:gap-[40px] items-end justify-between self-stretch w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start max-w-[768px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    TRANDING
                  </Text>
                  <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[100%]">
                    <Text
                      className="font-russoone not-italic self-stretch text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Tranding Products
                    </Text>
                    <Text
                      className="font-normal font-quicksand not-italic self-stretch text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </Text>
                  </div>
                </div>
                <Button className="cursor-pointer font-bold text-[16px] text-center text-gray_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls16 w-[150px]">
                  View all
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start max-w-[1312px] w-[100%]">
                  <List
                    className="flex sm:flex-col sm:flex-none flex-row gap-[32px] justify-start self-stretch w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start mx-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_placeholderimage_304x304.png"
                        className="h-[304px] sm:h-[auto] object-cover rounded-radius10 w-[304px]"
                        alt="PlaceholderImage One"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product name
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Variant
                          </Text>
                        </div>
                        <Text
                          className="self-stretch text-gray_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $55.00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start mx-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_placeholderimage_1.png"
                        className="h-[304px] sm:h-[auto] object-cover rounded-radius10 w-[304px]"
                        alt="PlaceholderImage Two"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product name
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Variant
                          </Text>
                        </div>
                        <Text
                          className="self-stretch text-gray_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $55.00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start mx-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_placeholderimage_2.png"
                        className="h-[304px] sm:h-[auto] object-cover rounded-radius10 w-[304px]"
                        alt="PlaceholderImage Three"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product name
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Variant
                          </Text>
                        </div>
                        <Text
                          className="self-stretch text-gray_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $55.00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start mx-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_placeholderimage_3.png"
                        className="h-[304px] sm:h-[auto] object-cover rounded-radius10 w-[304px]"
                        alt="PlaceholderImage Four"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product name
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Variant
                          </Text>
                        </div>
                        <Text
                          className="self-stretch text-gray_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $55.00
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute bg-white_A700 bottom-[0] flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] inset-x-[0] items-center justify-center max-w-[1440px] mx-[auto] sm:px-[20px] md:px-[40px] px-[64px] py-[112px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[394px] md:gap-[40px] sm:gap-[40px] items-end justify-between self-stretch w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start max-w-[768px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    OFFERS & PROMOTIONS
                  </Text>
                  <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[100%]">
                    <Text
                      className="font-russoone not-italic self-stretch text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Offers & Promotion Products
                    </Text>
                    <Text
                      className="font-normal font-quicksand not-italic self-stretch text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </Text>
                  </div>
                </div>
                <Button className="cursor-pointer font-bold text-[16px] text-black_900 text-center md:tracking-ls1 sm:tracking-ls1 tracking-ls16 w-[150px]">
                  View all
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start max-w-[1312px] w-[100%]">
                  <List
                    className="flex sm:flex-col sm:flex-none flex-row gap-[32px] justify-start self-stretch w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start mx-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_placeholderimage_4.png"
                        className="h-[304px] sm:h-[auto] object-cover rounded-radius10 w-[304px]"
                        alt="PlaceholderImage Five"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product name
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Variant
                          </Text>
                        </div>
                        <Text
                          className="self-stretch text-gray_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $55.00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start mx-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_placeholderimage_5.png"
                        className="h-[304px] sm:h-[auto] object-cover rounded-radius10 w-[304px]"
                        alt="PlaceholderImage Six"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product name
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Variant
                          </Text>
                        </div>
                        <Text
                          className="self-stretch text-gray_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $55.00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start mx-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_placeholderimage_6.png"
                        className="h-[304px] sm:h-[auto] object-cover rounded-radius10 w-[304px]"
                        alt="PlaceholderImage Seven"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product name
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Variant
                          </Text>
                        </div>
                        <Text
                          className="self-stretch text-gray_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $55.00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start mx-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_placeholderimage_7.png"
                        className="h-[304px] sm:h-[auto] object-cover rounded-radius10 w-[304px]"
                        alt="PlaceholderImage Eight"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product name
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Variant
                          </Text>
                        </div>
                        <Text
                          className="self-stretch text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          <span className="text-gray_900 text-[20px] font-quicksand font-bold">
                            $55.0
                          </span>
                          <span className="text-gray_900 text-[20px] tracking-ls07000000000000001 font-quicksand font-bold sm:tracking-ls1 md:tracking-ls1">
                            0
                          </span>
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </Stack>
          <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start max-w-[1440px] sm:px-[20px] md:px-[40px] px-[64px] py-[112px] w-[100%]">
            <Img
              src="images/img_placeholderimage_640x616.png"
              className="flex-1 h-[640px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[47%]"
              alt="PlaceholderImage Nine"
            />
            <div className="flex flex-col gap-[32px] items-start justify-start md:w-[100%] sm:w-[100%] w-[616px]">
              <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[100%]">
                <Text
                  className="font-russoone leading-[120.00%] max-w-[616px] not-italic self-stretch text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1"
                  as="h3"
                  variant="h3"
                >
                  Long heading is what you see here in this feature section
                </Text>
                <Text
                  className="font-medium font-quicksand leading-[150.00%] max-w-[616px] self-stretch text-gray_900 text-left tracking-ls036 md:tracking-ls1 sm:tracking-ls1"
                  as="h5"
                  variant="h5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </Text>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start self-stretch w-[100%]">
                  <Img
                    src="images/img_folder.svg"
                    className="h-[24px] object-cover w-[24px]"
                    alt="folder"
                  />
                  <Text
                    className="flex-1 flex-grow font-normal not-italic text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start self-stretch w-[100%]">
                  <Img
                    src="images/img_folder.svg"
                    className="h-[24px] object-cover w-[24px]"
                    alt="folder One"
                  />
                  <Text
                    className="flex-1 flex-grow font-normal not-italic text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start self-stretch w-[100%]">
                  <Img
                    src="images/img_folder.svg"
                    className="h-[24px] object-cover w-[24px]"
                    alt="folder Two"
                  />
                  <Text
                    className="flex-1 flex-grow font-normal not-italic text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start max-w-[1440px] sm:px-[20px] md:px-[40px] px-[64px] py-[112px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-start max-w-[768px] w-[100%]">
              <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[100%]">
                <Text
                  className="font-russoone leading-[120.00%] max-w-[768px] mx-[auto] not-italic self-stretch text-center text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1"
                  as="h2"
                  variant="h2"
                >
                  Medium length heading goes here
                </Text>
                <Text
                  className="font-normal font-quicksand leading-[150.00%] max-w-[768px] mx-[auto] not-italic self-stretch text-center text-gray_900 tracking-ls06300000000000001 md:tracking-ls1 sm:tracking-ls1"
                  as="h5"
                  variant="h5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </Text>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start pt-[16px] md:w-[100%] sm:w-[100%] w-[513px]">
                <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start self-stretch w-[100%]">
                  <Input
                    className="font-normal font-roboto sm:mx-[0] not-italic p-[0] text-[16px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                    wrapClassName="flex-1 w-[100%]"
                    type="email"
                    name="TextInput"
                    placeholder="Enter your email"
                  ></Input>
                  <Button className="cursor-pointer font-bold font-quicksand text-[16px] text-center text-gray_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls16 w-[130px]">
                    Sign Up
                  </Button>
                </div>
                <Text
                  className="not-italic self-stretch text-bluegray_400 text-left w-[auto]"
                  variant="body2"
                >
                  <span className="text-bluegray_400 text-[12px] font-roboto font-normal">
                    By clicking Sign Up you're confirming that you agree with
                    our{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-bluegray_400 text-[12px] font-roboto font-normal underline"
                  >
                    Terms and Conditions
                  </a>
                  <span className="text-bluegray_400 text-[12px] font-roboto font-normal">
                    .
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col font-quicksand md:gap-[40px] sm:gap-[40px] gap-[64px] items-center justify-start max-w-[1440px] py-[80px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_logopng1.png"
                  className="h-[84px] sm:h-[auto] object-cover w-[100%]"
                  alt="LogoPNGOne One"
                />
              </div>
              <div className="flex flex-row gap-[32px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Home
                </Text>
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Products
                </Text>
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  About
                </Text>
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Contact
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-center justify-start max-w-[1280px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
              <Line className="bg-gray_900 h-[1px] self-stretch w-[100%]" />
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[24px] sm:gap-[24px] items-start justify-between self-stretch w-[100%]">
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  2022 Relume. All right reserved.
                </Text>
                <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-black_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="font-medium text-black_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Terms of Service
                  </Text>
                  <Text
                    className="font-medium text-black_900 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Cookies Settings
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
