import Layout from "components/Layout"
import styled from "styled-components"
import Image from "next/image"
import { Title, FlexContainer } from "../components/atoms"
import { FaqLine, MintBanner, RoadmapLine } from "components/molecules"
import { DrippywoodRow, TeamBlock, TwoColumn } from "components/organisms"
import MANSION from "@assets/drippywood-inside.jpg"
import COUPLE from "@assets/DAD-couple.jpg"
import DRIPBOX from "@assets/dripbox.jpg"
import { DADs, DrippywoodIcons, RoadmapContent, team, Faq } from "../constant"
import { useWindowSize } from "hooks/useWindowSize"

const ITitle = styled.div`
  color: white;
  margin-top: 6rem;
  text-transform: uppercase;

  h1,
  p {
    margin: 0;
  }

  h1 {
    font-size: 108px;
    margin-bottom: 2rem;

    @media only screen and (max-width: 768px) {
      font-size: 60px;
    }
  }

  p {
    font-size: 36px;
    font-weight: 500;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
`

const Description = styled.p`
  line-height: 2.25rem;
  width 70%;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    width: 100%;
  }
`

const FullWidth = styled.div`
  width: 100%;
  height: auto;
`

const RoadmapSection = styled.section`
  .roadmapLineContainer:last-child {
    .roadmap-line {
      display: none;
    }
  }
`

const ApeContainer = styled.div`
  height: 260px;
  width: 260px;
  @media only screen and (max-width: 425px) {
    height: 150px;
    width: 150px;
  }
`

export default function Home() {
  const { width } = useWindowSize()
  return (
    <Layout>
      <FullWidth>
        <Image
          src={MANSION}
          alt="inside of Drippywood mansion"
          layout="responsive"
          width={1200}
          height={767}
          priority
        />
      </FullWidth>
      <ITitle>
        <p>Welcome to the</p>
        <h1>Dope Ape Drip Society</h1>
      </ITitle>
      <Description>
        D.A.D.S is a collection of Dope Ape NFT&apos;s- unique digital
        collectables all residing on the Ethereum Blockchain. Your Dope Ape will
        serve as your official membership into the Drippywood community and use
        of special members-only benefits. Join D.A.D.S in our journey to create
        an amazing community passionate about being the flyest apes in the
        metaverse.
      </Description>
      <FlexContainer style={{ marginTop: "5rem", flexDirection: "row" }} wrap>
        {DADs.map((el, idx) => (
          <ApeContainer key={idx}>
            <Image
              src={el}
              alt="Dope Ape NFT"
              layout="responsive"
              height={250}
              width={250}
            />
          </ApeContainer>
        ))}
      </FlexContainer>
      <MintBanner />
      <TwoColumn
        title="The Drip"
        paragraphs={[
          "Each of our Dope Apes are 100% unique and randomly generated from over 180+ possible variations of drip. All apes will derive and take inspiration from luxury brands and streetwear culture in our attempt to make the flyest looking apes in the metaverse.",
          "The different traits from which your ape can be generated from will include the head, ears, eyes, fur, mouth, chain, clothes and background. These apes will be stored as ERC-721 tokens on the Ethereum Blockchain. Holding an ape will gain you membership into the Drippywood community."
        ]}
        imageSrc={COUPLE}
        alt="Drippywood"
      />
      <DrippywoodRow title="Welcome to Drippywood" icons={DrippywoodIcons} />
      <TwoColumn
        title="The Dripbox"
        paragraphs={[
          "The D.A.D.S DRIP BOX is a merch subscription box that we will offer to our holders on a monthly basis. Each month we will ship a fresh new batch of merch from our streetwear inspired D.A.D.S brand.",
          "Expect every month to be unique and include new garments and new designs for our holders. The box will revolve around 3-4 pieces of freshly designed items to make this the dopest collection of NFT merch and branding on the market.",
          "Pricing will depend on your status in Drippywood. The more apes you hold and the longer you HODL D.A.D.S, the better price that will be available.",
          "Also, claiming your DRIP BOX will serve as your automatic entry to our monthly Drip Giveaways from your favorite luxury brands and events. You will not want to miss this unique utility experience!"
        ]}
        imageSrc={DRIPBOX}
        alt="Dripbox mock up"
      />
      <RoadmapSection id="roadmap">
        <Title>The Roadmap</Title>
        <FlexContainer className="roadmap-container">
          <FlexContainer
            justify="space-between"
            direction="column"
            gap="4rem"
            alignItems="flex-start"
            style={{ position: "relative" }}
          >
            {RoadmapContent.map((src, idx) => (
              <RoadmapLine text={src.text} key={idx} />
            ))}
          </FlexContainer>
        </FlexContainer>
      </RoadmapSection>
      <section id="team">
        <Title>Team</Title>
        <FlexContainer gap={width <= 768 ? "2rem" : "1rem"}>
          {team.map((el) => {
            const { name, src, alt, role, handles } = el
            return (
              <TeamBlock
                key={name}
                src={src}
                alt={alt}
                name={name}
                role={role}
                handles={handles}
              />
            )
          })}
        </FlexContainer>
      </section>
      <section id="faqs">
        <Title>FAQ</Title>
        {Faq.map((el, idx) => (
          <FaqLine key={idx} question={el.question} answer={el.answer} />
        ))}
      </section>
      <style jsx>{`
        #team,
        #faq,
        #roadmap {
          padding: 5rem 0;
        }

        .roadmap-container {
          padding: 2rem;
          width: 100%;
        }

        @media only screen and (max-width: 425px) {
          .roadmap-container {
            padding: 1rem;
          }
        }
      `}</style>
    </Layout>
  )
}
