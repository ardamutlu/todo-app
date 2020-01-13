import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListAlt,
  faFileSignature,
  faGlobeEurope,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { useLocation } from 'react-router';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderComponent,
  Item,
  List,
  MenuIcon,
  MenuLabel,
  StyledLink,
  SubTitle,
  Title
} from './styles';
import { setLanguage } from '../../actions/i18n';

function CustomToggle({ children, eventKey }: any) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => null);
  return (
    <StyledLink to="#" className="m-0 p-0 w-100 text-left" onClick={decoratedOnClick}>
      {children}
    </StyledLink>
  );
}

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const _location = useLocation();
  const locale = useSelector(({ i18n }: any) => i18n.lang.toUpperCase());
  const isMobile = useSelector(({ app }: any) => app.isMobile);
  const [collapseActive, setCollapseActive] = useState(false);
  const [activeKey, setActiveKey] = useState({});

  const menu = [
    {
      id: 1,
      title: 'TODO',
      url: '/',
      active: _location.pathname === '/',
      collapse: false,
      icon: faListAlt
    },
    {
      id: 2,
      title: 'MENU.DOCUMENTATION',
      url: '/documentation',
      active: _location.pathname === '/documentation',
      collapse: false,
      icon: faFileSignature
    }
  ];

  const onClick = (index: number) => {
    for (let i = 0; i < menu.length; i++) {
      if (i === index && !menu[index].collapse) {
        menu[i].active = true;
      }
      if (i !== index && !menu[index].collapse) {
        menu[i].active = false;
      }
    }
  };

  const handleOnSelectPanel = (open: any) => {
    setCollapseActive(!!open);
  };

  const changeLang = useCallback((lang: string) => {
    dispatch(setLanguage(lang));
  }, []);

  useEffect(() => {
    if (isMobile) {
      setActiveKey({});
    } else {
      setActiveKey({ activeKey: '0' });
    }
  }, [isMobile]);

  return (
    <HeaderComponent>
      <Accordion className="w-100" defaultActiveKey={isMobile ? '1' : '0'} {...activeKey}>
        <CustomToggle eventKey="0">
          <Title>Todo App</Title>
          {isMobile && (
            <span
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: 40,
                paddingRight: '2rem'
              }}
            >
              <FontAwesomeIcon icon={faBars} color={'#fff'} size="lg" />
            </span>
          )}
        </CustomToggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="px-0">
            <SubTitle>
              <FormattedMessage id="MENU.OVERVIEW" />
            </SubTitle>
            <List>
              {menu.map((v: any, index: number) => {
                return (
                  <Item key={index} className={v.active ? 'active' : ''}>
                    <StyledLink to={v.url} onClick={() => onClick(index)}>
                      <MenuIcon>
                        <FontAwesomeIcon icon={v.icon} color={v.active ? '#FFAD40' : '#9090C5'} />
                      </MenuIcon>
                      <MenuLabel>{v.title && <FormattedMessage id={v.title} />}</MenuLabel>
                    </StyledLink>
                  </Item>
                );
              })}
              <Item className={collapseActive ? 'active' : ''}>
                <StyledLink to="#">
                  <MenuIcon>
                    <FontAwesomeIcon
                      icon={faGlobeEurope}
                      color={collapseActive ? '#FFAD40' : '#9090C5'}
                    />
                  </MenuIcon>
                  <Accordion className="w-100" onSelect={handleOnSelectPanel}>
                    <CustomToggle eventKey="1">
                      <FormattedMessage id={locale} />
                    </CustomToggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="px-0">
                        <StyledLink to="#" className="pl-0 py-2" onClick={() => changeLang('en')}>
                          <img
                            style={{ height: 20 }}
                            src="https://image.flaticon.com/icons/svg/197/197484.svg"
                            alt=""
                          />
                          <span
                            style={{
                              lineHeight: 1.3,
                              paddingLeft: '.75rem',
                              color: locale === 'EN' ? '#FFAD40' : '#9090C5'
                            }}
                          >
                            <FormattedMessage id="EN" />
                          </span>
                        </StyledLink>
                        <StyledLink to="#" className="pl-0 py-2" onClick={() => changeLang('tr')}>
                          <img
                            style={{ height: 20 }}
                            src="https://image.flaticon.com/icons/svg/197/197518.svg"
                            alt=""
                          />
                          <span
                            style={{
                              lineHeight: 1.3,
                              paddingLeft: '.75rem',
                              color: locale === 'TR' ? '#FFAD40' : '#9090C5'
                            }}
                          >
                            <FormattedMessage id="TR" />
                          </span>
                        </StyledLink>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </StyledLink>
              </Item>
            </List>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
    </HeaderComponent>
  );
};
