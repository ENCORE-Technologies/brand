// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( require => {
  'use strict';

  // modules
  const brand = require( 'BRAND/../../js/brand' );
  const getLinks = require( 'BRAND/../../js/getLinks' );
  const logoOnWhiteBackground = require( 'image!BRAND/logo-on-white.png' );
  const logoOnBlackBackground = require( 'image!BRAND/logo.png' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  const Brand = {
    id: 'phet',
    name: 'PhET\u2122 Interactive Simulations', // no i18n
    copyright: 'Copyright © 2002-{{year}} University of Colorado Boulder', // no i18n
    getLinks: getLinks,
    logoOnBlackBackground: logoOnBlackBackground,
    logoOnWhiteBackground: logoOnWhiteBackground
  };

  brand.register( 'Brand', Brand );

  return Brand;
} );
