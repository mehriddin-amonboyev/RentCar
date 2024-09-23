import { Injectable } from '@nestjs/common';
import { Market, Branch } from './market.model';

@Injectable()
export class MarketService {
    private markets: Market[] = [];

    getAllMarkets(): Market[] {
        return this.markets;
    }

    getMarketById(id: number): Market {
        return this.markets.find(market => market.id === id);
    }

    createMarket(name: string, location: string): Market {
        const newMarket: Market = {
            id: this.markets.length + 1,
            name,
            location,
            branches: []
        };
        this.markets.push(newMarket);
        return newMarket;
    }

    updateMarket(id: number, name: string, location: string): Market {
        const market = this.getMarketById(id);
        if (market) {
            market.name = name || market.name;
            market.location = location || market.location;
        }
        return market;
    }

    deleteMarket(id: number): void {
        this.markets = this.markets.filter(market => market.id !== id);
    }

    addBranchToMarket(marketId: number, branchName: string, branchAddress: string): Branch {
        const market = this.getMarketById(marketId);
        const newBranch: Branch = {
            id: market.branches.length + 1,
            name: branchName,
            address: branchAddress
        };
        market.branches.push(newBranch);
        return newBranch;
    }
}
