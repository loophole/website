import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import AccountMenu from "./account-menu"
import { Link } from "gatsby"

import { Container } from "../../global"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style"

const NAV_ITEMS = ["Features", "Pricing"]
const PAGE_ITEMS = ["Docs"]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
    isAuthenticated: false,
    profile: null
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = (item, id) => {
    if (!id) id = item;
    if (this.props.isIndex)
      return (
        <AnchorLink href={`#${id.toLowerCase()}`} onClick={this.closeMobileMenu}>
          {item}
        </AnchorLink>
      )
    return (
      <Link to={`/#${id.toLowerCase()}`} onClick={this.closeMobileMenu}>
        {item}
      </Link>
    )
  }

  getPageAnchorLink = item => (
    <Link to={`/${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </Link>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}

        {PAGE_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getPageAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
            <Scrollspy offset={-64} item={["loophole"]} currentClassName="active">
              {this.getNavAnchorLink("loophole", "logo")}
            </Scrollspy>
          </Brand>
          <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                  <Menu size={24} alt="open menu" />
                )}
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
          <ActionsContainer>
            <AccountMenu />
          </ActionsContainer>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}
